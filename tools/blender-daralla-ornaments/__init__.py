bl_info = {
    "name": "Daralla Procedural Ornaments",
    "author": "OpenAI Codex",
    "version": (1, 1, 0),
    "blender": (4, 0, 0),
    "location": "View3D > Sidebar > Daralla",
    "description": "Generate procedural ornamental mesh patterns",
    "category": "Add Mesh",
}

import math
from dataclasses import dataclass

import bmesh
import bpy
from bpy.props import (
    FloatProperty,
    IntProperty,
    PointerProperty,
)
from bpy.types import Operator, Panel, PropertyGroup
from mathutils import Vector


def smoothstep(edge0: float, edge1: float, x: float) -> float:
    if edge0 == edge1:
        return 0.0
    value = max(0.0, min(1.0, (x - edge0) / (edge1 - edge0)))
    return value * value * (3.0 - 2.0 * value)


def rotate_2d(point: Vector, angle: float) -> Vector:
    cos_a = math.cos(angle)
    sin_a = math.sin(angle)
    return Vector(
        (
            point.x * cos_a - point.y * sin_a,
            point.x * sin_a + point.y * cos_a,
        )
    )


def perpendicular(vector: Vector) -> Vector:
    return Vector((-vector.y, vector.x))


@dataclass(slots=True)
class RibbonProfile:
    points: list[Vector]
    width: float
    closed: bool = False


class DarallaOrnamentProperties(PropertyGroup):
    radius: FloatProperty(
        name="Radius",
        description="Overall scale of the ornament",
        default=2.0,
        min=0.2,
        soft_max=10.0,
    )
    arm_width: FloatProperty(
        name="Arm Width",
        description="Width of the ornamental ribbon arms",
        default=0.18,
        min=0.02,
        soft_max=1.0,
    )
    rotation: FloatProperty(
        name="Rotation",
        description="Rotate the overall pattern",
        default=0.0,
        subtype="ANGLE",
    )
    detail_level: IntProperty(
        name="Detail Level",
        description="Controls sample count and decorative layers",
        default=3,
        min=1,
        max=5,
    )
    symmetry: IntProperty(
        name="Symmetry",
        description="Number of radial repetitions",
        default=8,
        min=4,
        max=16,
    )
    thickness: FloatProperty(
        name="Thickness",
        description="Extrusion thickness for the mesh",
        default=0.08,
        min=0.005,
        soft_max=0.5,
    )


def create_main_arm(
    radius: float,
    segment_angle: float,
    detail_level: int,
) -> list[Vector]:
    sample_count = 18 + detail_level * 8
    arc_span = segment_angle * (0.74 + detail_level * 0.025)
    points: list[Vector] = []

    for index in range(sample_count):
        t = index / (sample_count - 1)
        arch = math.sin(math.pi * t)
        hook = smoothstep(0.58, 1.0, t)
        secondary_wave = math.sin(math.pi * t * (2.0 + detail_level * 0.35))
        radial = radius * (0.22 + 0.82 * arch**0.88)
        radial += radius * 0.028 * secondary_wave * (1.0 - 0.45 * hook)
        radial -= radius * 0.17 * hook

        angle = -arc_span * 0.5 + arc_span * t
        angle += segment_angle * 0.09 * math.sin(2.0 * math.pi * t)
        angle += segment_angle * 0.24 * hook

        points.append(Vector((math.cos(angle) * radial, math.sin(angle) * radial)))

    return points


def create_inner_accent(
    radius: float,
    segment_angle: float,
    detail_level: int,
) -> list[Vector]:
    sample_count = 14 + detail_level * 6
    arc_span = segment_angle * 0.62
    points: list[Vector] = []

    for index in range(sample_count):
        t = index / (sample_count - 1)
        crest = math.sin(math.pi * t)
        taper = 1.0 - smoothstep(0.72, 1.0, t)
        radial = radius * (0.18 + 0.36 * crest**1.18)
        radial += radius * 0.02 * math.sin(3.0 * math.pi * t) * taper

        angle = -arc_span * 0.48 + arc_span * t
        angle -= segment_angle * 0.12 * crest * taper
        angle += segment_angle * 0.06 * math.sin(2.0 * math.pi * t)

        points.append(Vector((math.cos(angle) * radial, math.sin(angle) * radial)))

    return points


def create_interstitial_flourish(radius: float, segment_angle: float) -> list[Vector]:
    sample_count = 16
    arc_span = segment_angle * 0.55
    points: list[Vector] = []

    for index in range(sample_count):
        t = index / (sample_count - 1)
        wave = math.sin(math.pi * t)
        radial = radius * (0.48 + 0.16 * wave)
        radial -= radius * 0.05 * smoothstep(0.75, 1.0, t)

        angle = -arc_span * 0.5 + arc_span * t
        angle += segment_angle * 0.18 * math.sin(2.0 * math.pi * t) * (1.0 - 0.5 * t)

        points.append(Vector((math.cos(angle) * radial, math.sin(angle) * radial)))

    return points


def create_wave_ring(
    radius: float,
    symmetry: int,
    detail_level: int,
    scale: float,
    amplitude: float,
) -> list[Vector]:
    sample_count = max(72, symmetry * 18 + detail_level * 12)
    points: list[Vector] = []

    for index in range(sample_count):
        angle = math.tau * index / sample_count
        radial = radius * scale
        radial += radius * amplitude * math.cos(angle * symmetry * 2.0)
        radial += radius * (amplitude * 0.35) * math.sin(angle * symmetry)
        points.append(Vector((math.cos(angle) * radial, math.sin(angle) * radial)))

    return points


def build_profiles(props: DarallaOrnamentProperties) -> list[RibbonProfile]:
    profiles: list[RibbonProfile] = []
    segment_angle = math.tau / props.symmetry
    rotation = props.rotation

    main_arm = create_main_arm(props.radius, segment_angle, props.detail_level)
    for step in range(props.symmetry):
        angle = rotation + step * segment_angle
        profiles.append(
            RibbonProfile(
                points=[rotate_2d(point, angle) for point in main_arm],
                width=props.arm_width,
                closed=False,
            )
        )

    if props.detail_level >= 2:
        inner_accent = create_inner_accent(props.radius, segment_angle, props.detail_level)
        for step in range(props.symmetry):
            angle = rotation + step * segment_angle
            profiles.append(
                RibbonProfile(
                    points=[rotate_2d(point, angle) for point in inner_accent],
                    width=props.arm_width * 0.52,
                    closed=False,
                )
            )

    profiles.append(
        RibbonProfile(
            points=[
                rotate_2d(point, rotation)
                for point in create_wave_ring(
                    props.radius,
                    props.symmetry,
                    props.detail_level,
                    scale=0.2,
                    amplitude=0.02 + props.detail_level * 0.004,
                )
            ],
            width=props.arm_width * 0.58,
            closed=True,
        )
    )

    if props.detail_level >= 3:
        profiles.append(
            RibbonProfile(
                points=[
                    rotate_2d(point, rotation)
                    for point in create_wave_ring(
                        props.radius,
                        props.symmetry,
                        props.detail_level,
                        scale=0.52,
                        amplitude=0.03 + props.detail_level * 0.006,
                    )
                ],
                width=props.arm_width * 0.34,
                closed=True,
            )
        )

    if props.detail_level >= 4:
        flourish = create_interstitial_flourish(props.radius, segment_angle)
        for step in range(props.symmetry):
            angle = rotation + (step + 0.5) * segment_angle
            profiles.append(
                RibbonProfile(
                    points=[rotate_2d(point, angle) for point in flourish],
                    width=props.arm_width * 0.42,
                    closed=False,
                )
            )

    if props.detail_level >= 5:
        profiles.append(
            RibbonProfile(
                points=[
                    rotate_2d(point, rotation)
                    for point in create_wave_ring(
                        props.radius,
                        props.symmetry,
                        props.detail_level,
                        scale=0.82,
                        amplitude=0.018,
                    )
                ],
                width=props.arm_width * 0.22,
                closed=True,
            )
        )

    return profiles


def compute_offsets(points: list[Vector], closed: bool, half_width: float) -> list[Vector]:
    count = len(points)
    offsets: list[Vector] = []

    for index in range(count):
        current = points[index]
        prev_point = points[index - 1] if index > 0 else (points[-1] if closed else points[index])
        next_point = points[(index + 1) % count] if (closed or index < count - 1) else points[index]

        prev_tangent = current - prev_point
        next_tangent = next_point - current

        if prev_tangent.length < 1e-6:
            prev_tangent = next_tangent.copy()
        if next_tangent.length < 1e-6:
            next_tangent = prev_tangent.copy()

        if prev_tangent.length < 1e-6:
            prev_tangent = Vector((1.0, 0.0))
        if next_tangent.length < 1e-6:
            next_tangent = Vector((1.0, 0.0))

        prev_normal = perpendicular(prev_tangent.normalized())
        next_normal = perpendicular(next_tangent.normalized())

        if not closed and index == 0:
            normal = next_normal
        elif not closed and index == count - 1:
            normal = prev_normal
        else:
            normal = prev_normal + next_normal
            if normal.length < 1e-6:
                normal = next_normal
            else:
                normal.normalize()

        alignment = max(0.35, normal.dot(next_normal))
        offsets.append(normal * (half_width / alignment))

    return offsets


def append_ribbon_geometry(
    verts: list[tuple[float, float, float]],
    faces: list[tuple[int, int, int, int]],
    profile: RibbonProfile,
    thickness: float,
) -> None:
    points = profile.points
    if len(points) < 2:
        return

    half_width = max(0.001, profile.width * 0.5)
    half_thickness = max(0.001, thickness * 0.5)
    offsets = compute_offsets(points, profile.closed, half_width)
    base_index = len(verts)

    for point, offset in zip(points, offsets):
        left = point + offset
        right = point - offset
        verts.extend(
            [
                (left.x, left.y, half_thickness),
                (right.x, right.y, half_thickness),
                (left.x, left.y, -half_thickness),
                (right.x, right.y, -half_thickness),
            ]
        )

    count = len(points)
    segment_count = count if profile.closed else count - 1

    for index in range(segment_count):
        next_index = (index + 1) % count
        current = base_index + index * 4
        following = base_index + next_index * 4

        faces.extend(
            [
                (current, following, following + 1, current + 1),
                (current + 2, current + 3, following + 3, following + 2),
                (current, current + 2, following + 2, following),
                (current + 1, following + 1, following + 3, current + 3),
            ]
        )

    if not profile.closed:
        start = base_index
        end = base_index + (count - 1) * 4
        faces.extend(
            [
                (start, start + 1, start + 3, start + 2),
                (end, end + 2, end + 3, end + 1),
            ]
        )


def build_mesh_data(
    props: DarallaOrnamentProperties,
) -> tuple[list[tuple[float, float, float]], list[tuple[int, int, int, int]]]:
    verts: list[tuple[float, float, float]] = []
    faces: list[tuple[int, int, int, int]] = []

    for profile in build_profiles(props):
        append_ribbon_geometry(verts, faces, profile, props.thickness)

    return verts, faces


def build_clean_mesh(
    mesh_name: str,
    props: DarallaOrnamentProperties,
) -> bpy.types.Mesh:
    verts, faces = build_mesh_data(props)

    mesh = bpy.data.meshes.new(mesh_name)
    mesh.from_pydata(verts, [], faces)
    mesh.update(calc_edges=True)

    bm = bmesh.new()
    bm.from_mesh(mesh)
    remove_distance = max(0.0001, min(props.arm_width, props.thickness) * 0.08)
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=remove_distance)
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    bm.normal_update()
    bm.to_mesh(mesh)
    bm.free()

    mesh.validate(verbose=False)
    mesh.update(calc_edges=True)
    mesh.use_auto_smooth = True

    return mesh


def create_mesh_object(
    context: bpy.types.Context,
    props: DarallaOrnamentProperties,
) -> bpy.types.Object:
    mesh = build_clean_mesh("DarallaOrnament", props)

    obj = bpy.data.objects.new("Daralla Ornament", mesh)
    obj["daralla_ornament"] = True
    obj.location = context.scene.cursor.location.copy()
    context.collection.objects.link(obj)

    for selected in context.selected_objects:
        selected.select_set(False)
    obj.select_set(True)
    context.view_layer.objects.active = obj

    return obj


def active_ornament_object(context: bpy.types.Context) -> bpy.types.Object | None:
    obj = context.view_layer.objects.active
    if obj and obj.type == "MESH" and obj.get("daralla_ornament"):
        return obj
    return None


def update_mesh_object(obj: bpy.types.Object, props: DarallaOrnamentProperties) -> None:
    old_mesh = obj.data
    new_mesh = build_clean_mesh(old_mesh.name, props)
    obj.data = new_mesh
    obj["daralla_ornament"] = True

    if old_mesh.users == 0:
        bpy.data.meshes.remove(old_mesh)


class DARALLA_OT_generate_ornament(Operator):
    bl_idname = "daralla.generate_ornament"
    bl_label = "Generate Ornament"
    bl_description = "Create procedural ornamental mesh geometry"
    bl_options = {"REGISTER", "UNDO"}

    def execute(self, context: bpy.types.Context) -> set[str]:
        props = context.scene.daralla_ornament_props
        create_mesh_object(context, props)
        return {"FINISHED"}


class DARALLA_OT_update_ornament(Operator):
    bl_idname = "daralla.update_ornament"
    bl_label = "Update Ornament"
    bl_description = "Regenerate the active Daralla ornament mesh using current settings"
    bl_options = {"REGISTER", "UNDO"}

    @classmethod
    def poll(cls, context: bpy.types.Context) -> bool:
        return active_ornament_object(context) is not None

    def execute(self, context: bpy.types.Context) -> set[str]:
        props = context.scene.daralla_ornament_props
        obj = active_ornament_object(context)
        if obj is None:
            self.report({"WARNING"}, "Select an active Daralla ornament object to update.")
            return {"CANCELLED"}

        update_mesh_object(obj, props)
        return {"FINISHED"}


class DARALLA_PT_ornament_panel(Panel):
    bl_label = "Daralla Ornaments"
    bl_idname = "DARALLA_PT_ornament_panel"
    bl_space_type = "VIEW_3D"
    bl_region_type = "UI"
    bl_category = "Daralla"

    def draw(self, context: bpy.types.Context) -> None:
        layout = self.layout
        props = context.scene.daralla_ornament_props

        col = layout.column(align=True)
        col.prop(props, "radius")
        col.prop(props, "arm_width")
        col.prop(props, "rotation")
        col.prop(props, "detail_level")
        col.prop(props, "symmetry")
        col.prop(props, "thickness")
        layout.separator()
        row = layout.row(align=True)
        row.operator(DARALLA_OT_generate_ornament.bl_idname, icon="MESH_TORUS")
        row.operator(DARALLA_OT_update_ornament.bl_idname, icon="FILE_REFRESH")


classes = (
    DarallaOrnamentProperties,
    DARALLA_OT_generate_ornament,
    DARALLA_OT_update_ornament,
    DARALLA_PT_ornament_panel,
)


def register() -> None:
    for cls in classes:
        bpy.utils.register_class(cls)

    bpy.types.Scene.daralla_ornament_props = PointerProperty(
        type=DarallaOrnamentProperties,
    )


def unregister() -> None:
    del bpy.types.Scene.daralla_ornament_props

    for cls in reversed(classes):
        bpy.utils.unregister_class(cls)


if __name__ == "__main__":
    register()

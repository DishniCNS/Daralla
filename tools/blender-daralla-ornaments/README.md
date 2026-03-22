# Daralla Procedural Ornaments

Blender addon that generates procedural ornamental patterns as clean mesh geometry.

## Features

- Procedural radial ornament generation
- Mesh output with real thickness
- Sidebar UI panel with sliders and action buttons
- In-place update for the active Daralla ornament object

## Parameters

- `radius`
- `arm width`
- `rotation`
- `symmetry`
- `thickness`
- `detail level`

## UI Panel

The addon adds a `Daralla` tab in the `View3D` sidebar with:

- sliders for all parameters
- `Generate Ornament` button
- `Update Ornament` button

`Update Ornament` rebuilds the currently active Daralla ornament mesh using the current slider values.

## Output

- Clean mesh geometry
- Closed ribbon volumes with thickness
- Remove-doubles cleanup and face normal recalculation
- Editable mesh object placed at the 3D cursor

## Install

1. In Blender, open `Edit > Preferences > Add-ons`
2. Click `Install...`
3. Select the addon zip
4. Enable `Daralla Procedural Ornaments`

## Use

1. Open the `View3D` sidebar
2. Find the `Daralla` tab
3. Adjust the sliders
4. Click `Generate Ornament` to create a new mesh
5. Select a generated Daralla ornament and click `Update Ornament` to rebuild it

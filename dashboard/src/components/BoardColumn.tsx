import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectStatus, StudioColumn } from "../types";

type BoardColumnProps = {
  column: StudioColumn;
  projects: Project[];
  isActiveDropzone: boolean;
  onDragStart: (projectId: string) => void;
  onDragEnd: () => void;
  onDrop: (status: ProjectStatus) => void;
};

export function BoardColumn({
  column,
  projects,
  isActiveDropzone,
  onDragStart,
  onDragEnd,
  onDrop,
}: BoardColumnProps) {
  return (
    <section
      onDragOver={(event) => event.preventDefault()}
      onDrop={() => onDrop(column.id)}
      className={`flex min-w-[300px] flex-col rounded-[26px] border p-4 transition-colors duration-200 xl:min-w-0 ${
        isActiveDropzone
          ? "border-cyan-300/30 bg-cyan-300/[0.05]"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            {column.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-2xl tracking-[-0.04em] text-white">
            {column.title}
          </h2>
        </div>
        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
          {projects.length}
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-4">
        {projects.length ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          ))
        ) : (
          <div className="flex min-h-32 items-center justify-center rounded-[22px] border border-dashed border-white/10 bg-black/10 px-4 text-center text-sm leading-6 text-slate-500">
            Drop a project here to move it into {column.title.toLowerCase()}.
          </div>
        )}
      </div>
    </section>
  );
}

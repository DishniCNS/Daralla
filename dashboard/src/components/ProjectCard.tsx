import { statusLabels } from "../data/projects";
import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
  onDragStart: (projectId: string) => void;
  onDragEnd: () => void;
};

function formatDeadline(deadline: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(deadline));
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ProjectCard({
  project,
  onDragStart,
  onDragEnd,
}: ProjectCardProps) {
  return (
    <article
      draggable
      onDragStart={() => onDragStart(project.id)}
      onDragEnd={onDragEnd}
      className="cursor-grab rounded-[24px] border border-white/10 bg-slate-950/90 p-4 shadow-[0_18px_50px_rgba(2,6,23,0.35)] active:cursor-grabbing"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
          {statusLabels[project.status]}
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          {formatDeadline(project.deadline)}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl tracking-[-0.04em] text-white">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-4 rounded-[20px] border border-white/10 bg-white/[0.03] px-3 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300/80 to-emerald-300/70 text-xs font-bold text-slate-950">
            {getInitials(project.assignedArtist)}
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Assigned Artist
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">
              {project.assignedArtist}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Status
          </p>
          <p className="mt-1 text-sm font-medium text-slate-200">
            {statusLabels[project.status]}
          </p>
        </div>
      </div>
    </article>
  );
}

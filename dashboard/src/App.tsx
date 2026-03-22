import { useEffect, useState } from "react";
import { BoardColumn } from "./components/BoardColumn";
import { StatCard } from "./components/StatCard";
import {
  fallbackProjects,
  studioColumns,
  studioSummary,
} from "./data/projects";
import type { Project, ProjectStatus } from "./types";

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";
const adminApiKey = import.meta.env.VITE_ADMIN_API_KEY || "";

function buildRequestHeaders() {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (adminApiKey) {
    headers["x-admin-key"] = adminApiKey;
  }

  return headers;
}

function formatDeadlineLabel(deadline: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(deadline));
}

function App() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [draggedProjectId, setDraggedProjectId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        const response = await fetch(`${apiBaseUrl}/api/studio-projects`, {
          headers: adminApiKey ? { "x-admin-key": adminApiKey } : undefined,
        });

        if (!response.ok) {
          throw new Error("Failed to load studio projects.");
        }

        const payload = (await response.json()) as { projects: Project[] };

        if (isMounted) {
          setProjects(payload.projects);
          setError(null);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(
            loadError instanceof Error
              ? `${loadError.message} Showing fallback data.`
              : "Unable to load studio projects. Showing fallback data.",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const projectsByStatus = studioColumns.reduce<Record<ProjectStatus, Project[]>>(
    (accumulator, column) => {
      accumulator[column.id] = projects.filter(
        (project) => project.status === column.id,
      );
      return accumulator;
    },
    {
      ideas: [],
      planning: [],
      production: [],
      review: [],
      finished: [],
    },
  );

  const totalProjects = projects.length;
  const finishedProjects = projectsByStatus.finished.length;
  const activeProjects = totalProjects - finishedProjects;

  const nextDeadline = [...projects]
    .sort(
      (left, right) =>
        new Date(left.deadline).getTime() - new Date(right.deadline).getTime(),
    )
    .find((project) => project.status !== "finished");

  async function persistStatus(projectId: string, status: ProjectStatus) {
    try {
      const response = await fetch(
        `${apiBaseUrl}/api/studio-projects/${projectId}/status`,
        {
          method: "PATCH",
          headers: buildRequestHeaders(),
          body: JSON.stringify({ status }),
        },
      );

      if (!response.ok) {
        throw new Error("Unable to save project status.");
      }

      const payload = (await response.json()) as { project: Project };

      setProjects((currentProjects) =>
        currentProjects.map((project) =>
          project.id === projectId ? payload.project : project,
        ),
      );
      setError(null);
    } catch (updateError) {
      setError(
        updateError instanceof Error
          ? updateError.message
          : "Unable to save project status.",
      );
    }
  }

  function handleDrop(nextStatus: ProjectStatus) {
    if (!draggedProjectId) {
      return;
    }

    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === draggedProjectId
          ? { ...project, status: nextStatus }
          : project,
      ),
    );
    void persistStatus(draggedProjectId, nextStatus);
    setDraggedProjectId(null);
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_22%),linear-gradient(180deg,_#050816,_#060b14_45%,_#02050d)] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-6 shadow-[0_30px_80px_rgba(2,6,23,0.35)] backdrop-blur xl:px-8">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
                Creative Studio Dashboard
              </p>
              <h1 className="mt-4 font-display text-4xl tracking-[-0.05em] text-white sm:text-5xl">
                Project flow for art direction, production, and review.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Internal kanban board for Daralla studio projects across ideas,
                planning, production, review, and finished delivery.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:min-w-[540px] xl:grid-cols-3">
              {studioSummary.map((item) => (
                <StatCard
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  tone={item.tone}
                />
              ))}
              <StatCard
                label="Active Projects"
                value={`${activeProjects}`}
                tone="neutral"
              />
              <StatCard
                label="Finished"
                value={`${finishedProjects}/${totalProjects}`}
                tone="success"
              />
              <StatCard
                label="Next Deadline"
                value={
                  nextDeadline
                    ? formatDeadlineLabel(nextDeadline.deadline)
                    : "No pending work"
                }
                tone="warning"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
              Source: {isLoading ? "Loading..." : `${projects.length} projects`}
            </span>
            {error ? (
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-amber-100">
                {error}
              </span>
            ) : (
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-emerald-100">
                Live sync enabled
              </span>
            )}
          </div>
        </header>

        <main className="mt-6 flex-1 overflow-hidden">
          <div className="grid h-full gap-5 overflow-x-auto pb-4 xl:grid-cols-5 xl:overflow-visible">
            {studioColumns.map((column) => (
              <BoardColumn
                key={column.id}
                column={column}
                projects={projectsByStatus[column.id]}
                onDragStart={setDraggedProjectId}
                onDragEnd={() => setDraggedProjectId(null)}
                onDrop={handleDrop}
                isActiveDropzone={draggedProjectId !== null}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

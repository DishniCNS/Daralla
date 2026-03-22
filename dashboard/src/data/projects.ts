import type { Project, ProjectStatus, StudioColumn } from "../types";

export const studioColumns: StudioColumn[] = [
  { id: "ideas", title: "Ideas", eyebrow: "Concept Queue" },
  { id: "planning", title: "Planning", eyebrow: "Scoping" },
  { id: "production", title: "Production", eyebrow: "Making" },
  { id: "review", title: "Review", eyebrow: "Feedback Loop" },
  { id: "finished", title: "Finished", eyebrow: "Delivered" },
];

export const statusLabels: Record<ProjectStatus, string> = {
  ideas: "Ideas",
  planning: "Planning",
  production: "Production",
  review: "Review",
  finished: "Finished",
};

export const studioSummary = [
  { label: "Studio Pulse", value: "Live production", tone: "info" as const },
  { label: "Review Window", value: "Creative QA", tone: "warning" as const },
  { label: "Delivery Pace", value: "Status synced", tone: "success" as const },
];

export const fallbackProjects: Project[] = [
  {
    id: "fallback-1",
    title: "Astra Launch Film",
    description:
      "Develop the visual language and shot sequence for a sci-fi product reveal teaser.",
    assignedArtist: "Mila Hargrove",
    deadline: "2026-03-18T00:00:00.000Z",
    status: "ideas",
  },
  {
    id: "fallback-2",
    title: "Orbit Brand Site",
    description:
      "Map homepage structure, portfolio sequencing, and interaction goals for the new studio website.",
    assignedArtist: "Theo Mercer",
    deadline: "2026-03-21T00:00:00.000Z",
    status: "planning",
  },
  {
    id: "fallback-3",
    title: "Helio Product Renders",
    description:
      "Produce a premium still-life render set for campaign landing pages and investor materials.",
    assignedArtist: "Rin Alvarez",
    deadline: "2026-03-17T00:00:00.000Z",
    status: "production",
  },
  {
    id: "fallback-4",
    title: "Pulse Social Toolkit",
    description:
      "Finalize motion cuts and export platform-ready edits for a social launch package.",
    assignedArtist: "Noah Kim",
    deadline: "2026-03-16T00:00:00.000Z",
    status: "review",
  },
  {
    id: "fallback-5",
    title: "Luma Installation Deck",
    description:
      "Creative direction deck and production notes for an immersive exhibition pitch.",
    assignedArtist: "Ava Sloane",
    deadline: "2026-03-11T00:00:00.000Z",
    status: "finished",
  },
];

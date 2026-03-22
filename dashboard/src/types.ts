export type ProjectStatus =
  | "ideas"
  | "planning"
  | "production"
  | "review"
  | "finished";

export type Project = {
  id: string;
  title: string;
  description: string;
  assignedArtist: string;
  deadline: string;
  status: ProjectStatus;
};

export type StudioColumn = {
  id: ProjectStatus;
  title: string;
  eyebrow: string;
};

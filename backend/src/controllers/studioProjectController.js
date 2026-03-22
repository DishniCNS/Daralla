const {
  StudioProject,
  studioProjectStatusOptions,
} = require("../models/StudioProject");

function buildValidationError(message) {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
}

function normalizeProjectPayload(payload) {
  return {
    title: payload.title?.trim(),
    description: payload.description?.trim(),
    assignedArtist: payload.assignedArtist?.trim(),
    deadline: payload.deadline,
  };
}

function validateStudioProjectPayload(payload) {
  const normalized = normalizeProjectPayload(payload);

  if (
    !normalized.title ||
    !normalized.description ||
    !normalized.assignedArtist ||
    !normalized.deadline
  ) {
    throw buildValidationError("All studio project fields are required.");
  }

  const parsedDeadline = new Date(normalized.deadline);
  if (Number.isNaN(parsedDeadline.getTime())) {
    throw buildValidationError("Deadline must be a valid date.");
  }

  return {
    ...normalized,
    deadline: parsedDeadline,
  };
}

function validateStatus(status) {
  if (!studioProjectStatusOptions.includes(status)) {
    throw buildValidationError(
      `Invalid status. Allowed values: ${studioProjectStatusOptions.join(", ")}.`,
    );
  }

  return status;
}

async function findStudioProjectOrThrow(projectId) {
  const project = await StudioProject.findById(projectId);

  if (!project) {
    const error = new Error("Studio project not found.");
    error.statusCode = 404;
    throw error;
  }

  return project;
}

async function seedStudioProjectsIfEmpty() {
  const existingCount = await StudioProject.countDocuments();

  if (existingCount > 0) {
    return;
  }

  await StudioProject.insertMany([
    {
      title: "Astra Launch Film",
      description:
        "Develop the visual language and shot sequence for a sci-fi product reveal teaser.",
      assignedArtist: "Mila Hargrove",
      deadline: new Date("2026-03-18"),
      status: "ideas",
    },
    {
      title: "Orbit Brand Site",
      description:
        "Map homepage structure, portfolio sequencing, and interaction goals for the new studio website.",
      assignedArtist: "Theo Mercer",
      deadline: new Date("2026-03-21"),
      status: "planning",
    },
    {
      title: "Helio Product Renders",
      description:
        "Produce a premium still-life render set for campaign landing pages and investor materials.",
      assignedArtist: "Rin Alvarez",
      deadline: new Date("2026-03-17"),
      status: "production",
    },
    {
      title: "Pulse Social Toolkit",
      description:
        "Finalize motion cuts and export platform-ready edits for a social launch package.",
      assignedArtist: "Noah Kim",
      deadline: new Date("2026-03-16"),
      status: "review",
    },
    {
      title: "Luma Installation Deck",
      description:
        "Creative direction deck and production notes for an immersive exhibition pitch.",
      assignedArtist: "Ava Sloane",
      deadline: new Date("2026-03-11"),
      status: "finished",
    },
  ]);
}

async function listStudioProjects(req, res) {
  const filter = {};

  if (req.query.status) {
    filter.status = validateStatus(req.query.status);
  }

  const projects = await StudioProject.find(filter).sort({
    deadline: 1,
    createdAt: -1,
  });

  return res.json({
    count: projects.length,
    projects,
    statuses: studioProjectStatusOptions,
  });
}

async function createStudioProject(req, res) {
  const payload = validateStudioProjectPayload(req.body);
  const status = req.body.status ? validateStatus(req.body.status) : "ideas";
  const project = await StudioProject.create({
    ...payload,
    status,
  });

  return res.status(201).json({
    message: "Studio project created successfully.",
    project,
  });
}

async function getStudioProject(req, res) {
  const project = await findStudioProjectOrThrow(req.params.id);
  return res.json(project);
}

async function updateStudioProjectStatus(req, res) {
  const project = await findStudioProjectOrThrow(req.params.id);
  project.status = validateStatus(req.body.status);
  await project.save();

  return res.json({
    message: "Studio project status updated successfully.",
    project,
  });
}

module.exports = {
  seedStudioProjectsIfEmpty,
  listStudioProjects,
  createStudioProject,
  getStudioProject,
  updateStudioProjectStatus,
  studioProjectStatusOptions,
};

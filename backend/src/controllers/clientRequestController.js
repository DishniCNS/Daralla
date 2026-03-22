const {
  ClientRequest,
  clientRequestStatusOptions,
} = require("../models/ClientRequest");

function buildValidationError(message) {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
}

function normalizePayload(payload) {
  return {
    clientName: payload.clientName?.trim(),
    email: payload.email?.trim(),
    projectType: payload.projectType?.trim(),
    description: payload.description?.trim(),
    budget: payload.budget?.trim(),
  };
}

function validateClientRequestPayload(payload) {
  const normalized = normalizePayload(payload);

  if (
    !normalized.clientName ||
    !normalized.email ||
    !normalized.projectType ||
    !normalized.description ||
    !normalized.budget
  ) {
    throw buildValidationError("All client request fields are required.");
  }

  return normalized;
}

function validateStatus(status) {
  if (!clientRequestStatusOptions.includes(status)) {
    throw buildValidationError(
      `Invalid status. Allowed values: ${clientRequestStatusOptions.join(", ")}.`,
    );
  }

  return status;
}

async function findClientRequestOrThrow(requestId) {
  const request = await ClientRequest.findById(requestId);

  if (!request) {
    const error = new Error("Client request not found.");
    error.statusCode = 404;
    throw error;
  }

  return request;
}

async function createClientRequest(req, res) {
  const payload = validateClientRequestPayload(req.body);
  const request = await ClientRequest.create(payload);

  return res.status(201).json({
    message: "Client request submitted successfully.",
    request,
  });
}

async function listClientRequests(req, res) {
  const filter = {};

  if (req.query.status) {
    filter.status = validateStatus(req.query.status);
  }

  const requests = await ClientRequest.find(filter).sort({ createdAt: -1 });

  return res.json({
    count: requests.length,
    requests,
  });
}

async function getClientRequestDetails(req, res) {
  const request = await findClientRequestOrThrow(req.params.id);
  return res.json(request);
}

async function updateClientRequestStatus(req, res) {
  const request = await findClientRequestOrThrow(req.params.id);
  request.status = validateStatus(req.body.status);
  await request.save();

  return res.json({
    message: "Client request status updated successfully.",
    request,
  });
}

async function renderDashboard(req, res) {
  const currentStatus = req.query.status || "";
  const filter = currentStatus ? { status: validateStatus(currentStatus) } : {};
  const requests = await ClientRequest.find(filter).sort({ createdAt: -1 });

  return res.render("admin/index", {
    pageTitle: "Daralla Admin Dashboard",
    projects: requests,
    statusOptions: clientRequestStatusOptions,
    currentStatus,
  });
}

async function renderClientRequestDetails(req, res) {
  const project = await findClientRequestOrThrow(req.params.id);

  return res.render("admin/details", {
    pageTitle: `Project ${project.clientName}`,
    project,
    statusOptions: clientRequestStatusOptions,
  });
}

async function updateClientRequestStatusFromDashboard(req, res) {
  const request = await findClientRequestOrThrow(req.params.id);
  request.status = validateStatus(req.body.status);
  await request.save();

  return res.redirect(`/admin/requests/${request.id}`);
}

module.exports = {
  createClientRequest,
  listClientRequests,
  getClientRequestDetails,
  updateClientRequestStatus,
  renderDashboard,
  renderClientRequestDetails,
  updateClientRequestStatusFromDashboard,
};

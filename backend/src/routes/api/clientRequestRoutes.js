const express = require("express");
const asyncHandler = require("../../middlewares/asyncHandler");
const { requireAdminAccess } = require("../../middlewares/adminAuth");
const {
  createClientRequest,
  listClientRequests,
  getClientRequestDetails,
  updateClientRequestStatus,
} = require("../../controllers/clientRequestController");

const router = express.Router();

router.post("/", asyncHandler(createClientRequest));
router.get("/", requireAdminAccess, asyncHandler(listClientRequests));
router.get("/:id", requireAdminAccess, asyncHandler(getClientRequestDetails));
router.patch(
  "/:id/status",
  requireAdminAccess,
  asyncHandler(updateClientRequestStatus),
);

module.exports = router;

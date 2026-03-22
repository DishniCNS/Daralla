const express = require("express");
const asyncHandler = require("../../middlewares/asyncHandler");
const {
  renderDashboard,
  renderClientRequestDetails,
  updateClientRequestStatusFromDashboard,
} = require("../../controllers/clientRequestController");

const router = express.Router();

router.get("/", asyncHandler(renderDashboard));
router.get("/:id", asyncHandler(renderClientRequestDetails));
router.post("/:id/status", asyncHandler(updateClientRequestStatusFromDashboard));

module.exports = router;

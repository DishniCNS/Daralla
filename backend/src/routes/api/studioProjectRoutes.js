const express = require("express");
const asyncHandler = require("../../middlewares/asyncHandler");
const { requireAdminAccess } = require("../../middlewares/adminAuth");
const {
  listStudioProjects,
  createStudioProject,
  getStudioProject,
  updateStudioProjectStatus,
} = require("../../controllers/studioProjectController");

const router = express.Router();

router.use(requireAdminAccess);
router.get("/", asyncHandler(listStudioProjects));
router.post("/", asyncHandler(createStudioProject));
router.get("/:id", asyncHandler(getStudioProject));
router.patch("/:id/status", asyncHandler(updateStudioProjectStatus));

module.exports = router;

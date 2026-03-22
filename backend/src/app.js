const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const clientRequestRoutes = require("./routes/api/clientRequestRoutes");
const studioProjectRoutes = require("./routes/api/studioProjectRoutes");
const requestAdminRoutes = require("./routes/admin/requestAdminRoutes");
const { errorHandler, notFoundHandler } = require("./middlewares/errorHandler");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({
    name: "Daralla Studio API",
    adminDashboard: "/admin/requests",
    endpoints: {
      submitClientRequest: "POST /api/client-requests",
      listClientRequests: "GET /api/client-requests",
      listStudioProjects: "GET /api/studio-projects",
      updateStudioProjectStatus: "PATCH /api/studio-projects/:id/status",
    },
  });
});

app.use("/api/client-requests", clientRequestRoutes);
app.use("/api/studio-projects", studioProjectRoutes);
app.use("/admin/requests", requestAdminRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;

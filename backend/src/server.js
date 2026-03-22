require("dotenv").config();
const app = require("./app");
const connectDatabase = require("./config/db");
const { seedStudioProjectsIfEmpty } = require("./controllers/studioProjectController");

const port = process.env.PORT || 4000;

async function startServer() {
  await connectDatabase();
  await seedStudioProjectsIfEmpty();

  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});

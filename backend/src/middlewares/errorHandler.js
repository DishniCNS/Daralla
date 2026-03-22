function notFoundHandler(req, res) {
  if (req.originalUrl.startsWith("/api/")) {
    return res.status(404).json({ message: "Route not found." });
  }

  return res.status(404).send("Page not found.");
}

function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error.";

  if (res.headersSent) {
    return next(err);
  }

  if (req.originalUrl.startsWith("/api/")) {
    return res.status(statusCode).json({
      message,
      details: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
  }

  return res.status(statusCode).send(message);
}

module.exports = {
  notFoundHandler,
  errorHandler,
};

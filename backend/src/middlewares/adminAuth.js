function requireAdminAccess(req, res, next) {
  const configuredKey = process.env.ADMIN_API_KEY;

  if (!configuredKey) {
    return next();
  }

  const providedKey =
    req.get("x-admin-key") ||
    req.query.adminKey ||
    req.body?.adminKey;

  if (providedKey !== configuredKey) {
    return res.status(401).json({
      message: "Admin access denied.",
    });
  }

  return next();
}

module.exports = {
  requireAdminAccess,
};

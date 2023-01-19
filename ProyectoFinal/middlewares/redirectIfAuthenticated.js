function redirectIfAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/admin/ofertas");
  } else {
    return next();
  }
}

module.exports = redirectIfAuthenticated;

function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/users/login.ejs');
	}
	next();
}

module.exports = authMiddleware;
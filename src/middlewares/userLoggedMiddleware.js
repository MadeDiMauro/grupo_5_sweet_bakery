function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.isLogged = req.session.userLogged;  /*paso lo que tengo en session a locals para después usarlo en la vista de nabvaruser*/
    }
    next();
}

module.exports = userLoggedMiddleware;
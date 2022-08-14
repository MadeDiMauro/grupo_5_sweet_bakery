const User = require('../models/User');
function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    const emailInCookie = req.cookies.userEmail;
    const userFromCookie = User.findByField('email', emailInCookie);

    if (userFromCookie){
        req.session.userLogged = userFromCookie;
        //console.log(req.cookies.userEmail);
    }

    if (req.session && req.session.userLogged) {
        //res.locals.isLogged = true;
        res.locals.isLogged = req.session.userLogged;  /*paso lo que tengo en session a locals para después usarlo en la vista de nabvaruser*/
    }

    next();
}

module.exports = userLoggedMiddleware;
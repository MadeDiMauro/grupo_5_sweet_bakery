function userLoggedMiddleware (req,res,next) {
    
    if (req.session && req.session.userLogged) {
        res.locals.isLogged=false;
        res.locals.isLogged=req.session.userLogged;  /*paso lo que tengo en session a locals*/
    }
    next ();
}

module.exports= userLoggedMiddleware;
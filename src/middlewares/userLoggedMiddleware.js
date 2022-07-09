function userLoggedMiddleware (req,res,next) {
    
    if (req.session && req.session.userLogged) {
        res.locals.isLogged=false;
        res.locals.isLogged=req.session.userLogged;  /*paso lo que tengo en session a locals para después usarlo en la vista de nabvaruser*/
    }
    next ();
}

module.exports= userLoggedMiddleware;
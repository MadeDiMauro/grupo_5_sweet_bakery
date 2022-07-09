function authMiddleware (req,res,next) {
    if (!req.session.userLogged) {
        return res.direct ('/user/login');
    }
    next ();

}

module.exports=authMiddleware;
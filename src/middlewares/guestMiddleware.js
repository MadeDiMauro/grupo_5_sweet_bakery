function guestMiddleware (req,res,next) {
    if (req.session.userLogged) {
        return res.direct ('/user/profile');
    }
    next ();

}

module.exports=guestMiddleware;
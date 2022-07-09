function guestMiddleware (req,res,next) {
    if (req.session.userLogged) {
        return res.direct ('/users/profile');
    }
    next ();

}

module.exports=guestMiddleware;
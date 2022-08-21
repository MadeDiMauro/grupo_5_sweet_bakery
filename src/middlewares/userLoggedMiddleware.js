const db = require('../database/models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


async function  userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail; 
    let userFromCookie;
    
    if (emailInCookie){
        userFromCookie =  await db.user.findOne({
            where: {
                email: emailInCookie
            }
        }).catch(function () {
            console.log("Promise Rejected");
        });
       console.log(userFromCookie.dataValues);
    }
    

    if (userFromCookie){
        req.session.userLogged = userFromCookie.dataValues;
        //console.log(req.cookies.userEmail);
    }

    if (req.session && req.session.userLogged) {
        //res.locals.isLogged = true;
        res.locals.isLogged = req.session.userLogged;  /*paso lo que tengo en session a locals para después usarlo en la vista de nabvaruser*/
    }

  
    next();
}

module.exports = userLoggedMiddleware;
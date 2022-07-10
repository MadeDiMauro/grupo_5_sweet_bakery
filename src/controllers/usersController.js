const fs = require("fs");
const path = require("path");
const User= require ('../models/User'); 
const { validationResult } = require ('express-validator');
const bcryptjs = require('bcryptjs');



/*const usersdbPath = path.join(__dirname, "../database/users.json");

const readJsonFile = (path) => {
    const dataUsers = fs.readFileSync(path, { encoding: 'utf-8' });
    const dataUsersParsed = JSON.parse(dataUsers);
    return dataUsersParsed;
}

const usersList=readJsonFile(usersdbPath); /* no me lo lee*/

const usersController = {
  login: (req, res) => {
    return res.render('users/login')
  },

  processlogin: (req,res) =>{
    const resultvalidation = validationResult(req);

     
         if (resultvalidation.errors.length > 0){
         return res.render('users/login', {
          errors: resultvalidation.mapped(),
          oldData: req.body
         });         
      }
      return res.render('main/home');
  },

  loginProcess: (req, res) => { /*instalé bcrypt y lo llamé acá en userController*/
  let userToLogin = User.findByField('email', req.body.email)
  
  if(userToLogin) {
    let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
    
    if (passwordOk) {
      delete userToLogin.password; /*por seguridad se borra la password*/
      req.session.userLogged = userToLogin; /*en userToLogin está toda la info de session.userLogged*/
    return res.direct('/');  /*Acá debería redirigir a la página de profile/ hice una simple página en ejs y css*/
  } else {
    return res.render('userToLogin', {
      errors: {
        email: {
          msg: 'No se encuentra este e-mail en nuestra base de datos'
        }
      }
    })
  }
}
},

  /*login process:(req,re) => {
    let userToLogin=user},*/

  register: (req, res) => {
    return res.render('users/register')
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if(resultValidation.errors.length > 0){
      return res.render('users/register', {
        //NO ENTIENDO EL ERRORS Y MARIANO TAMPOCO :D
        errors: resultValidation.mapped(),
        old: req.body
      })
    }

    let userInDB = User.findByField('email', req.body.email);
    if(userInDB){
      return res.render('users/register', {
        errors: {
          email: { msg: 'Este email ya se encuentra registrado' }
        },
        old: req.body
      })
    }

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename
    }

    let userCreated = User.create(userToCreate);
    return res.redirect('/users/login');

  },

  /*processRegister: (req,res)=> {
    User.create (req.body);
    //return res.send ('ok, se guardó el usuario')
  }
   profile: (req,res) => {
     return  res.render ('profile')
   }
   */
}

module.exports = usersController;
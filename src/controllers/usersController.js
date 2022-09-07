const fs = require("fs");
const path = require("path");
//const User = require('../models/User');
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

/*const usersdbPath = path.join(__dirname, "../database/users.json");

const readJsonFile = (path) => {
    const dataUsers = fs.readFileSync(path, { encoding: 'utf-8' });
    const dataUsersParsed = JSON.parse(dataUsers);
    return dataUsersParsed;
}

const usersList=readJsonFile(usersdbPath); /* no me lo lee*/

const usersController = {
  register: (req, res) => {
    return res.render("users/register");
  },
  processRegister: async (req, res) => {
    const validations = validationResult(req);
    if (validations.errors.length > 0) {
      return res.render("users/register", {
        errors: validations.mapped(),
        old: req.body,
      });
    }

    let userInDB = await db.user.findAll({
      where: {
        email: req.body.email,
      },
    });

    if (userInDB.length > 0) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya se encuentra registrado",
          },
        },
        old: req.body,
      });
    }

    if (req.body.password !== req.body.re_password) {
      return res.render("users/register", {
        errors: {
          re_password: {
            msg: "Las contraseñas no coinciden",
          },
        },
        old: req.body,
      });
    }
    
    let userToCreate = await db.user
      .create({
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        re_password: bcryptjs.hashSync(req.body.password, 10),
        category_id: 2,
        avatar: req.file ? req.file.filename : "avatar1.jpg",
      })
      .then(() => {
        return res.redirect("/users/login");
      });
  },

  login: (req, res) => {
    return res.render("users/login");
  },

  processLogin: async (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("users/login", {
        errors: resultValidation.mapped(),
        old: req.body,
      });
    }

    let userToLogin = await db.user.findOne({
      where: {
        email: req.body.email,
      }
    });

    if (userToLogin) {
      let passwordOk = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (passwordOk) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.check_login) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 5 });
        }

        if (userToLogin.category_id === 1) {
          return res.redirect("/admin/");
        }
        return res.redirect("/users/profile");
      }

      return res.render("users/login", {
        errors: {
          generico: {
            msg: "Usuario o contraseña incorrecta",
          },
        },
      });
    }

    return res.render("users/login", {
      errors: {
        email: {
          msg: "Este mail no se encuentra registrado",
        },
      },
    });
  },

  edit: async (req, res) => {
    let user = await db.user.findOne({
      where: {
        id: req.params.id,
      },
    });

    return res.render("users/userEdit", { user });
                        
  },
  processEdit: async (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("users/login", {
       errors: resultValidation.mapped(),
        old: req.body,
      })
      }
    db.user.update(
      {
        name: req.body.name,
        phone: req.body.phone,
        avatar: req.file ? req.file.filename : "avatar1.jpg"
      },
      {
        where: { 
          email: req.body.email
        },
      }
    ).then(() => {
      return res.redirect('/users/profile');
    });

  },

  profile: (req, res) => {
    return res.render("users/userProfile", {
      user: req.session.userLogged /*usé user en la vista de profile*/,
    });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = usersController;

const fs = require("fs");
const path = require("path");
const User= require ('../models/User');

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

  /*login process:(req,re) => {
    let userToLogin=user},*/

  register: (req, res) => {
    return res.render('users/register')
  },

  processRegister: (req,res)=> {
    User.create (req.body);
    return res.send ('ok, se guardó el usuario')
  }
  /* profile: (req,res) => {
     return  res.render ('profile')
   }
   */
}

module.exports = usersController;
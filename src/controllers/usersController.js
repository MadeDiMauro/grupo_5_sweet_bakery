const fs = require("fs");
const path = require("path");

const usersdbPath = path.join(__dirname, "../database/users.json");

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
  register: (req, res) => {
    return res.render('users/register')
  },
  /* profile: (req,res) => {
     return  res.render ('profile')
   }
   */
}

module.exports = usersController;
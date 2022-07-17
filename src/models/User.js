const fs = require("fs");
const path = require("path");

//path.join(__dirname, "../database/products.json");


const User = {
<<<<<<< HEAD
  fileName: "../database/users.json",
=======
    fileName: 'src/database/users.json',
>>>>>>> cb2d88a8d006828cd686e243b8eaa1628dfc1276

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },

  /*GENERAR ID*/
  generateId: function () {
    let allUsers = this.findAll();
    let lastUser = allUsers.pop(); /*saco al último id del array y se guarda en allUsers*/
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  },

  findAll: function () {
    return this.getData();
  },

  /* BUSCAR POR ID*/
  findByPk: function (id) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser.id === id);
    return userFound;
  },

  /*BUSCAR POR MAIL U OTRO CAMPO*/
  findByField: function (field, text) {
    let allUsers = this.findAll();
    let userFound = allUsers.find((oneUser) => oneUser[field] === text);
    return userFound;
  },

  /*GUARDAR UN USUARIO*/
  create: function (userData) {
    let allUsers = this.findAll(); /*traer todos los usuarios y hago push a array userData y lo vuelvo a escribir en json*/
    let newUser = {
      id: this.generateId(),
      ...userData /*express generator*/
    };
    allUsers.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));
    return newUser;
  },

  /*BORRAR USUARIO /USO FILTER*/
  delete: function (id) {
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter(
      (oneUser) => oneUser.id !== id
    ); /*Me trae todos menos el que borre*/
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, " "));
    return true;
  },
};

/*console.log (User.create ({name:'elsa', email: 'elsa@hotmail.com'}))
console.log (User.delete (2));*/

module.exports = User;

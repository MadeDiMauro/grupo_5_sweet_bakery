const fs = require("fs");
const path = require("path");
/*const db= require ('../database/models'); 
const { Op } = db.sequelize;

/*createUser: (req, res) => {
    db.users.findAll().then((category_id) => {
      return res.render("users/userProfile", { category_id });
    }); 
    
 store: (req, res) => {
    db.users
      .create({
        name: req.body.name,
        price: req.body.email,
        description: req.body.phone,
        password: req.body.password,
        re_password: req.body.re_password,
        category_id:req.body.category_id,
        avatar: req.file ? req.file.filename : "logo-sweet-bakery-dorado.png",
      })
      .then(() => {
        return res.redirect("users/userProfile");
      });   

   editUser: (req, res) => {
    let category = db.category_id.findAll();
    let user = db.users.findByPk(req.params.id);

    Promise.all([category, user]).then(([c, p]) => {
      return res.render("users/admin/adminEdit", { category: c, product: p });
    });
  
  },
  update: async (req, res) => {
    //return res.json(req.files);
    
    if (req.files.length > 0) {

      
      let images = await db.users.avatar findAll({
        where: {
          category_id: req.params.id,
        },
      });
      
      if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          let url = path.join(__dirname,"/../../public/images/products/",images[i].url);
          if (fs.existsSync(url)) {
            fs.unlinkSync(url);
          }
        }

        db.images.destroy({
          where: {
            product_id: req.params.id,
          },
        });
      }

      for (let i = 0; i < req.files.length; i++) {
        db.images.create({
          url: req.files[i].filename,
          product_id: req.params.id,
        });
      }
    }

    db.users
      .update(
        {
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          category_id: req.body.category,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then(() => {
        return res.redirect("/admin/products");
        /*return res.redirect('/products/detail/'+req.params.id);
      });

      destroy: (req, res) => {

    db.users.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      return res.redirect("/users/userProfile"");
    });
    */

const User = {
    fileName: 'src/database/users.json',

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

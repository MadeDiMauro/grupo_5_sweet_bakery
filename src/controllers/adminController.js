const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = db.sequelize;

const productsdbPath = path.join(__dirname, "../database/products.json");

const readJsonFile = (path) => {
  const data = fs.readFileSync(path, { encoding: "utf-8" });
  const dataParsed = JSON.parse(data);
  return dataParsed;
};

const productsList = readJsonFile(productsdbPath);

const adminController = {
  principal: (req, res) => {
    return res.render("users/admin/principal");
  },
  // profile: (req, res) => {
  //     res.render('users/admin/profile');
  // },
  createUser: (req, res) => {
    res.render("users/admin/adminCreate");
  },
  editUser: (req, res) => {
    res.render("users/admin/adminEdit");
  },
  list: (req, res) => {
    db.products.findAll().then((productsList) => {
      res.render("users/admin/adminProducts", { productsList });
    });
  },
  createProduct: (req, res) => {
    db.products_categories.findAll().then((category) => {
      return res.render("users/admin/adminCreate", { category });
    });
  },
  store: (req, res) => {
    db.products
      .create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category_id: req.body.category,
        image: req.file ? req.file.filename : "logo-sweet-bakery-dorado.png",
      })
      .then(() => {
        return res.redirect("/admin/products");
      });

    /*const products = readJsonFile(productsdbPath)
        const product = {
            id: products[products.length - 1].id + 1,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: req.file ? req.file.filename : "logo-sweet-bakery-dorado.png"
        }

        products.push(product);
        fs.writeFileSync(productsdbPath, JSON.stringify(products, null, 2));
        return res.redirect("/admin/products")*/
  },
  editProduct: (req, res) => {
    let category = db.products_categories.findAll();
    let product = db.products.findByPk(req.params.id);

    Promise.all([category, product]).then(([c, p]) => {
      return res.render("users/admin/adminEdit", { category: c, product: p });
    });
    //validacion y son objeto (en el ejs, entre llaves solo comparto el item filtrado, se filtra aantes del render)
  },
  update: async (req, res) => {
    //return res.json(req.files);

    if (req.files) {
      let images = await db.images.findAll({
        where: {
          product_id: req.params.id,
        },
      });

      if (images) {
        for (let i = 0; i < images.length; i++) {
          let url = path.join(
            __dirname,
            "/../../public/images/products/",
            images[i].url
          );
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

    db.products
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
        /*return res.redirect('/products/detail/'+req.params.id);*/
      });

    /*
        const products = readJsonFile(productsdbPath)
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == req.params.id) {
                products[i] = {
                    id: products[i].id,
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    image: req.file ? req.file.filename : products[i].image,
                    category: req.body.category
                }
            }
        };
        fs.writeFileSync(productsdbPath, JSON.stringify(products, null, 2));
        return res.redirect("/admin/products");
        */
  },
  destroy: (req, res) => {
    const products = readJsonFile(productsdbPath);
    const productsUpdate = products.filter(
      (product) => product.id != req.params.id
    );

    fs.writeFileSync(productsdbPath, JSON.stringify(productsUpdate, null, 2));
    return res.redirect("/admin/products");
  },
};

module.exports = adminController;

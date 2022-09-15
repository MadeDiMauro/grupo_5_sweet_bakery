const { Sequelize } = require("sequelize");
const db = require("../../database/models");
const Op = Sequelize.Op;

const productsApiController = {
  productsList: async (req, res) => {
    let products = await db.products.findAll({
      include: [{
        model: db.products_categories,
        as: 'products_categories',
        attributes: []
      }],
      attributes: [
        [Sequelize.col('products_categories.type'), "categoria"],
        [Sequelize.fn("COUNT", Sequelize.col("category_id")), "cantidad"]
      ],
      group: "category_id",
    });

    let productsList = await db.products.findAll({
      include: [{
        model: db.products_categories,
        as: 'products_categories',
      }],
      attributes: [
        "id", "name", "price", "description",
        [Sequelize.fn('CONCAT', "http://localhost:3000/products/detail/", Sequelize.col('products.id')), 'url_detail'],
      ]
    })
    return res.status(200).json({
      meta: {
        code: res.statusCode, // status: 200, 
        count: productsList.length,
        countByCategory: products,
        products: productsList
      }
    });
  },
  productId: async (req, res) => {
    await db.products.findByPk(req.params.id)
      .then(product => {
        return res.status(200).json({
          meta: {
            code: res.statusCode,
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            //url: req.protocol + "://" + req.get("host") + req.originalUrl
          }
        })
      })
      .then(images => {
        db.images.findAll({
          where: {
            product_id
          },
          include: [{
            model: db.images,
            as: 'images'
          }]
        })
      }
      )


    /*   ● api/products/:id
 ○ Deberá devolver un objeto literal con la siguiente estructura:
 ■ una propiedad por cada campo en base.
 ■ un array por cada relación de uno a muchos (categories, colors,
 sizes, etc).
 ■ Una URL para la imagen del producto (para mostrar la imagen).
         //Hacer consulta a la BD
       return res.json("Hola :) soy la api");*/
  }
};

module.exports = productsApiController;
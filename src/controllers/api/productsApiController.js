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
    let product = await db.products.findByPk(req.params.id, {
      include: [{
        model: db.products_categories,
        as: 'products_categories',
        attributes: [],
      },{
        model: db.images,
        as: 'images',
        attributes: ['id', 'url', [Sequelize.fn('CONCAT', "http://localhost:3000/images/products/", Sequelize.col('images.url')), 'url_image']]
      }],
      attributes: [
        'id', 'name', 'price', 'description', [Sequelize.col('products_categories.type'), "categoria"],
        
      ]
    })
    
    return res.status(200).json({
      meta: {
        code: res.statusCode, // status: 200, 
        product
      }
    })     


    /*   ● api/products/:id
 ○ Deberá devolver un objeto literal con la siguiente estructura:
 ■ una propiedad por cada campo en base.
 ■ un array por cada relación de uno a muchos (categories, colors,
 sizes, etc).
 ■ Una URL para la imagen del producto (para mostrar la imagen).
  */
  }
};

module.exports = productsApiController;
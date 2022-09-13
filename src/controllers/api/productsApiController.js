const { Sequelize } = require("sequelize");
const db = require("../../database/models");
const Op = Sequelize.Op;

const productsApiController = {
    productsList: async (req, res) => {
      let categories= 
        db.products.findAll ()
        .then (products => {
          return res.status (200).json ({
            meta: {
              code:res.statusCode, // status: 200, 
              total:products.length,
            }
            })
          });
        db.products_categories.findAll()
        .then (products=> {
            return res.status(200).json({
            meta: {
                code: res.statusCode,
                url: req.protocol + "://" + req.get("host") + req.originalUrl,
                data: products
            },
           })
          })
  
/*let categorias = await db.products_categories.findAll();
if (req.query.category) {
    productsList = await db.products.findAll({
        where: {
            category_id: req.query.category
        },
        include: [{
            model: db.images,
            as: 'images'*/
    
      /*countByCategory → objeto literal con una propiedad por categoría
      con el total de productos.
      ■ products → array con la colección de productos, cada uno con:
      ● id
      ● name
      ● description
      ● un array con principal relación de uno a muchos (ej:
      categories).
      ● detail → URL para obtener el detalle.*/
      
      
    },
    productId: async (req, res) => {
        //Hacer consulta a la BD
      return res.json("Hola :) soy la api");
    }
};

module.exports = productsApiController;
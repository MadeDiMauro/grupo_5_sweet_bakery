const { Sequelize } = require("sequelize");
const db = require("../../database/models");
const Op = Sequelize.Op;

const productsApiController = {
    productsList: async (req, res) => {
      let products = db.products.findAll();
      let categories = db.products_categories.findAll(); 

      
      Promise.all([products, categories])
         .then ((products=> {
          let array= [];
          products[0].forEach ((products)=> {
          array.push ({
            id:products.id,
            })
            })
            return res.status (200).json ({
            meta: {
              code:res.statusCode, // status: 200, 
              total:products.length,
            },
          })
        }))
        /*.then (categories => {
         return res.status (200).json ({
          meta: {
          code:res.statusCode,
          categories: categories.length,
           },
        })
         
     })
       /* db.products_categories.findAll()
        .then (products=> {
            return res.status(200).json({
            meta: {
                code: res.statusCode,
                url: req.protocol + "://" + req.get("host") + req.originalUrl,
                data: products
            },
           })
          })
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
     await db.products.findByPk(req.params.id)
      .then(product => {          
       return res.status(200).json({
            meta: {
              code: res.statusCode,
              id: product.id,
              name: product.name,
              price: product.price,
              description: product.description,
              //avatar: "/images/avatars/" + product.avatar
            }
          })
        })
        .then (images => {

        
          
          db.images.findAll({
            where: {
              product_id
            },
            include: [{
                model: db.images,
                as: 'images'
            }]
          })}
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
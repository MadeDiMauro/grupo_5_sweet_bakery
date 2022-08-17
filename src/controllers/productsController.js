const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = db.sequelize;


const productsController = {
    list: async (req, res) => {
        let categorias = await db.products_categories.findAll();
        let productsList = await db.products.findAll();

        if(req.query.category){
            productsList = await db.products.findAll({
                where: {
                    category_id:req.query.category
                }
            })
        } 

        return res.render("products/products", { productsList, categorias });
    },
    detail: (req, res) => {
			const productsList = readJsonFile(productsdbPath);
			let productItem = productsList.find((item) => item.id == req.params.id);
			let productsRelated = productsList.filter(
				(item) => item.category == productItem.category
			);
			return res.render('products/productDetail', { productItem: productItem, productsRelated: productsRelated }) // validacion y sin objeto completo
			/*return res.json({ productsRelated: productsRelated });*/
		}
}


module.exports = productsController;
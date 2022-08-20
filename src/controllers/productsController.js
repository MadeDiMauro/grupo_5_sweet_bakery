const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = db.sequelize;


const productsController = {
    list: async (req, res) => {
        let productsList = await db.products.findAll();
        let search = req.query.search;

        // if(search){
        //     productsList = await db.products.findAll({
        //         where: {
        //             name: {[Op.like] }
        //         }
        //     }) 
        // }

        let categorias = await db.products_categories.findAll();
    
        if(req.query.category){
            productsList = await db.products.findAll({
                where: {
                    category_id: req.query.category
                }
            })
        } 

        return res.render("products/products", { productsList, categorias });
    },
    detail: async (req, res) => {

        let productItem = await db.products.findByPk(req.params.id)
                 
        let productsRelated = await db.products.findAll({
        where:{
            category_id: productItem.category_id
        } 

        })
        return res.render("products/productDetail",{productItem, productsRelated})
			
        
        
        /*const productsList = readJsonFile(productsdbPath);
			let productItem = productsList.find((item) => item.id == req.params.id);
			let productsRelated = productsList.filter(
				(item) => item.category == productItem.category
			);
			return res.render('products/productDetail', { productItem: productItem, productsRelated: productsRelated }) // validacion y sin objeto completo
			/*return res.json({ productsRelated: productsRelated });*/
		}
}


module.exports = productsController;
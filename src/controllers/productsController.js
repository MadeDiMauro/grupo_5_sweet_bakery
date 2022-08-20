const { name } = require("ejs");
const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = db.sequelize;


const productsController = {
    list: async (req, res) => {
        let productsList = await db.products.findAll();
        var search = req.query.search;

        if (search) {
            productsList = await db.products.findAll({
                where: {
                    name: search //NO FUNCIONA
                }
            })
        }

        let categorias = await db.products_categories.findAll();

        if (req.query.category) {
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
            where: {
                category_id: productItem.category_id
            }

        })
        return res.render("products/productDetail", { productItem, productsRelated })
    }
}


module.exports = productsController;
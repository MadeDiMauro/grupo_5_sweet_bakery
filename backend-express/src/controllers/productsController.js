const { name } = require("ejs");
const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const db = require("../database/models");
const Op = Sequelize.Op;


const productsController = {
    list: async (req, res) => {
        let productsList = await db.products.findAll({
            include: [{
                model: db.images,
                as: 'images'
            }]
        });
        var search = req.query.search;

        if (search) {
            productsList = await db.products.findAll({
                where: {
                    name: {
                        [Op.like]: '%'+search+'%'
                    } 
                }
            })
        }

        let categorias = await db.products_categories.findAll();

        if (req.query.category) {
            productsList = await db.products.findAll({
                where: {
                    category_id: req.query.category
                },
                include: [{
                    model: db.images,
                    as: 'images'
                }]
            })
        }
        //return res.json([productsList[0].images[0].url, categorias]);
        return res.render("products/products", { productsList, categorias });
    },
    detail: async (req, res) => {
        let productItem = await db.products.findByPk(req.params.id, {
            include: [{
            model: db.images,
            as: 'images'
        }]
        })

        let productsRelated = await db.products.findAll({
            where: {
                category_id: productItem.category_id
            },
            include: [{
                model: db.images,
                as: 'images'
            }]

        })
        return res.render("products/productDetail", { productItem, productsRelated })
    }
}


module.exports = productsController;
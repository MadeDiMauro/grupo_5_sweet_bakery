const { Sequelize } = require("sequelize");
const db = require("../../database/models");
const Op = Sequelize.Op;

const productsApiController = {
    productsList: async (req, res) => {
        //Hacer consulta a la BD
      return res.json("Hola :) soy la api");
    },
    productId: async (req, res) => {
        //Hacer consulta a la BD
      return res.json("Hola :) soy la api");
    }
};

module.exports = productsApiController;
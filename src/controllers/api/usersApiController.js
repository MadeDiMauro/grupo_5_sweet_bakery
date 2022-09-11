const { Sequelize } = require("sequelize");
const db = require("../../database/models");
const Op = Sequelize.Op;


const usersApiController = {
    usersList: async (req, res) => {
        //Hacer consulta a la BD
      return res.json("Hola :) soy la api");
    },
    userId: async (req, res) => {
        //Hacer consulta a la BD
      return res.json("Hola :) soy la api");
    }
};

module.exports = usersApiController;
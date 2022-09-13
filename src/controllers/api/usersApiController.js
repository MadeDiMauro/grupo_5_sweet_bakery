const { Sequelize } = require("sequelize");
const db = require("../../database/models");
const Op = Sequelize.Op;


const usersApiController = {
    usersList: async (req, res) => {
        db.user.findAll ()
        .then (users => {
          return res.status (200).json ({
            meta: {
              code:res.statusCode,
              total:users.length,
            },
            user: {
            /*id:,
              name:,
              email:,*/

            }

            })
          })
        
      }, 


      /*Hacer consulta a la BD
      //return res.json("Hola :) soy la api");*/

    userId: async (req, res) => {
      db.user.findByPk(req.params.id)
      .then(user => {
       return res.status(200).json({
                  meta: {
                      code: res.statusCode,
                      url: req.protocol + "://" + req.get("host") + req.originalUrl
                  },
                  data: user
              })
          });
        
      /*Hacer consulta a la BD
      return res.json("Hola :) soy la api");*/
    }
};

module.exports = usersApiController;
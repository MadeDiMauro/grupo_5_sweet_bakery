const { Sequelize } = require("sequelize");
const db = require("../../database/models");
const Op = Sequelize.Op;


const usersApiController = {
    usersList: async (req, res) => {
        db.user.findAll ()
        .then (users => {
          let array= [];
          users.forEach ((users)=> {
          array.push ({
            id:users.id,
            name:users.name,
            email:users.email,
            avatar: "/images/avatars/" + users.avatar
          })
          }) 
          return res.status(200).json ({
            meta: {
              code:res.statusCode, // status: 200, 
              total:users.length,
              data: array
            }
            })
          })
        
      }, 
      userId: async (req, res) => {
        db.user.findByPk(req.params.id)
        .then(user => {          
         return res.status(200).json({
                    meta: {
                      code: res.statusCode,
                      id: user.id,
                      name: user.name,
                      email: user.email,
                      phone: user.phone,
                      avatar: "http://localhost:3000/images/avatars/" + user.avatar
                    }
                    
                    
                })
            });
        }
  };      
 
   
/*Deberá devolver un objeto literal con la siguiente estructura:
■ Una propiedad por cada campo en base.
■ Una URL para la imagen de perfil (para mostrar la imagen).
■ Sin información sensible (ej: password y categoría).*/
module.exports = usersApiController;
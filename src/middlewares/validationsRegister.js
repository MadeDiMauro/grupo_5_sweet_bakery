const path = require('path');
const { body } = require('express-validator');

const validationsRegister = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre'),
    body('email').notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if(!file) {
            throw new Error('Debes ingresar una imagen de perfil');
            //INGRESAR IMAGEN DE PERFIL SERÁ OBLIGATORIO U OPCIONAL PARA EL USUARIO? Sino, en vez de error, que se suba imagen por default.
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error('Las extensiones de archivos permitidos son ${acceptedExtensions.join(', ')') 
                //VER SI FUNCIONA LA VINCULACIÓN ${...}
            }
            return true;
        }
        })
]

module.exports = validationsRegister;
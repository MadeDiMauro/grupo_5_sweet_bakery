const path = require('path');
const { body } = require('express-validator');
const fs = require('fs');
const db = require("../database/models");

const validationsRegister = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre').bail()
        .isLength({ min: 2}).withMessage('Debe contener al menos 2 caracteres'),
    body('email').notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un email válido').bail()
        .custom(async (value, { req }) => {
            let email = req.body.email;

            if (email) {
                let userInDB = await db.user.findAll({
                    where: {
                        email: req.body.email,
                    },
                });

                if (userInDB.length > 0) {
                    throw new Error("Este email ya está registrado");
                }
            }

            return true;
        }),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({ min: 8, max: 15}).withMessage('La contraseña debe contener entre 8 y 15 caracteres').bail()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/).withMessage('Debe contener al menos una minúscula, una mayúscula, un número y un caracter especial'),
    body('re_password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                fs.unlinkSync(path.join(__dirname, '../../public/images/avatars/', req.file.filename));
                throw new Error("Las extensiones de archivos permitidos son " + acceptedExtensions.join(", "));
            }
            return true;
        }

        return true;
    })

]

module.exports = validationsRegister;
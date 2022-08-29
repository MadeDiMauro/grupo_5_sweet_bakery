const path = require('path');
const { body } = require('express-validator');
const fs = require('fs');

const validationsRegister = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre'),
    body('email').notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({min: 8}).withMessage('La contraseña debe contener al menos 8 caracteres').bail()
        .isUppercase().withMessage('Debe contener una Mayúscula').isAlphanumeric().withMessage('Debe contener al menos un número'),
    body('re_password').notEmpty().withMessage('Debes ingresar una contraseña'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                fs.unlinkSync(path.join(__dirname, '../../public/images/avatars/',req.file.filename));
                throw new Error("Las extensiones de archivos permitidos son " + acceptedExtensions.join(", "));
            }
            return true;
        }
        
        return true;
    })
        
]

module.exports = validationsRegister;
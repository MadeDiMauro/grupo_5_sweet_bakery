const path = require('path');
const { body } = require('express-validator');
const fs = require('fs');

const validationsUser = [
    body('email').notEmpty().withMessage('Ingresa un email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    body('phone').notEmpty().withMessage('Ingresa tu teléfono'),
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
    })]



module.exports = validationsUser;
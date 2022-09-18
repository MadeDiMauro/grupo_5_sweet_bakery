const path = require('path');
const { body } = require('express-validator');
const fs = require('fs');

const validationsUser = [
    body('name').notEmpty().withMessage('Ingresa un nombre'),
    body('phone').notEmpty().withMessage('Ingresa tu teléfono').bail().isLength({ min: 2, max:9}).withMessage('Debe contener al menos 2 caracteres y no superar los 9 caracteres'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpeg','.jpg', '.png', '.gif'];
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
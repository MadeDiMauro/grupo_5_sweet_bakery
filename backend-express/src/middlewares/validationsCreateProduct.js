const path = require('path');
const { body } = require('express-validator');
const fs = require('fs');

const validationsCreateProduct = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre').bail().isLength({ min: 5}).withMessage('Mínimo de 5 carácteres'),
    body('description').notEmpty().withMessage('Debes ingresar una descripción').bail().isLength({ min: 20 }).withMessage('Máximo de 20 carácteres'),
    body('price').notEmpty().withMessage('Debes ingresar un precio').bail().isInt({ min:0}).withMessage('Número mayor a cero'),
    body('category').notEmpty().withMessage('Debes ingresar una categoria'),
    body('imgProduct').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpeg','.jpg', '.png', '.gif'];

        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                fs.unlinkSync(path.join(__dirname, '../../public/images/products/',req.file.filename));
                throw new Error("Las extensiones de archivos permitidos son " + acceptedExtensions.join(", "));
                //${acceptedExtensions.join(', ')}
            }
            return true;
        }
        
        return true;
    })
        
]

module.exports = validationsCreateProduct;
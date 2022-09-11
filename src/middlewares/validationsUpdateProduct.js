const path = require('path');
const { body } = require('express-validator');
const fs = require('fs');

const validationsUpdateProduct = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre').isLength({ min: 5}).withMessage('Debes ingresar un nombre de mínimo cinco caracteres'),
    body('descripcion').notEmpty().withMessage('Debes ingresar una descripción').isLength({ min: 10 }).withMessage('Debes ingresar una descripción de mínimo 20 caracteres'),
    body('price').notEmpty().withMessage('Debes ingresar un precio').isInt({ min:1}).withMessage('Debes ingresar un número mayor a cero'),
    body('category').notEmpty().withMessage('Debes ingresar una categoria válida'),
    body('imgProduct').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

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

module.exports = validationsUpdateProduct;
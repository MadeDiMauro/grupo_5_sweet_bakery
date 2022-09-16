const express = require('express');
const upload = require('../middlewares/multer');
const validationsCreateProduct = require('../middlewares/validationsCreateProduct');
const validationsUpdateProduct = require('../middlewares/validationsUpdateProduct');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.principal);

router.get('/products', adminController.list);
router.get('/createProduct', adminController.createProduct);
router.post('/products', upload.array('imgProduct', 3), validationsCreateProduct, adminController.store);
router.get('/editProduct/:id', adminController.editProduct);
router.put('/products/:id', upload.array('imgProduct', 3), validationsUpdateProduct, adminController.update);
router.delete('/deleteProduct/:id', adminController.destroy);


module.exports = router;
const express = require('express');
const upload = require('../middlewares/multer');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.principal);

router.get('/products', adminController.list);
router.get('/createProduct', adminController.createProduct);
router.post('/products', upload.single('imgProduct'), adminController.store);
router.get('/editProduct/:id', adminController.editProduct);
router.put('/products/:id', upload.array('imgProduct', 3), adminController.update);
router.delete('/deleteProduct/:id', adminController.destroy);


module.exports = router;
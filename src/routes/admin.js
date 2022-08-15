const express = require('express');
const upload = require('../middlewares/multer');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.principal);
// router.get('/profile', adminController.profile);
router.get('/products', adminController.list);
router.get('/createProduct', adminController.createProduct);
router.post('/products', upload.single('imgProduct'), adminController.store);
router.get('/editProduct/:id', adminController.editProduct);
router.put('/products/:id', upload.array('imgProduct', 3), adminController.update);
router.delete('/deleteProduct/:id', adminController.destroy);
router.get('/createUser', adminController.createUser);
router.get('/editUser', adminController.createUser);

module.exports = router;
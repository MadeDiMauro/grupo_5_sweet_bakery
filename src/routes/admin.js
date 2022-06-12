const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.principal);
// router.get('/profile', adminController.profile);
router.get('/products', adminController.list);
router.get('/edit', adminController.edit);
router.get('/create', adminController.create);

module.exports = router;
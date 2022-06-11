const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/principal', adminController.adminPage);
router.get('/edit', adminController.editList);
router.get('/create', adminController.create);

module.exports = router;
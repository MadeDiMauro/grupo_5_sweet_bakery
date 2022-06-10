const express = require('express');
const router = express.Router();
const cartController = require("../controllers/cartController.js");

router.get('/1', cartController.cart1);
router.get('/2', cartController.cart2);
router.get('/3', cartController.cart3);

module.exports = router;
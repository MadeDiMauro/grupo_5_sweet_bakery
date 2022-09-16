const express = require('express');
const router = express.Router();
const cartController = require("../controllers/cartController.js");

router.get('/paso-uno', cartController.cart1);
router.get('/paso-dos', cartController.cart2);
router.get('/paso-tres', cartController.cart3);

module.exports = router;
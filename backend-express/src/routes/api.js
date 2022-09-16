const express = require('express');
const router = express.Router();
const productsApiController = require("../controllers/api/productsApiController");
const usersApiController = require("../controllers/api/usersApiController");

router.get('/users/', usersApiController.usersList);
router.get('/users/:id', usersApiController.userId);
router.get('/products/', productsApiController.productsList);
router.get('/products/:id', productsApiController.productId);

module.exports = router;
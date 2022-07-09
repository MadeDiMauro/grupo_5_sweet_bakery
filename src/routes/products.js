const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController.js")

router.get('/list/:category?', productsController.list);
router.get('/detail/:id', productsController.detail);

module.exports = router;
const express = require('express');
const router = express.Router();
const productsController = requiere("../controllers/productsController.js")

router.get('/list', productsController.list);
router.get('/detail/:id', productsController.detail);
router.get('/create', productsController.create);
router.get('/edit/:id', productsController.edit);

module.exports = router;
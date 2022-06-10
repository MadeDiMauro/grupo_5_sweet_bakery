const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

router.get('/list', coursesController.list);
router.get('/detail/:id', coursesController.detail);

module.exports = router;
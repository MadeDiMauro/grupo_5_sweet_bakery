const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController.js");

router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/questions', mainController.questions);
router.get('/', mainController.home);


module.exports = router;
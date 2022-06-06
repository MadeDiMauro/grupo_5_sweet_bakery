const express = require('express');
const router = express.Router();
const mainController = requiere("../controllers/mainController.js")

router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
//router.get('/giftcard', mainController.giftcard);
//router.get('/questions', mainController.questions);
//router.get('/courses', mainController.courses);
//router.get('/coursesDetail/:id', mainController.coursesDetail);
router.get('/', mainController.home);

module.exports = router;
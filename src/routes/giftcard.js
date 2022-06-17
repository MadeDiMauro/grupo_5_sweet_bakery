const express = require('express');
const router = express.Router();
const giftCardController = require('../controllers/giftCardController');

router.get('/list', giftCardController.list);

module.exports = router;
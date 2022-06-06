const express = require('express');
const router = express.Router();
const usersController = requiere("../controllers/usersController.js")

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/profile/:id', usersController.profile);

module.exports = router;
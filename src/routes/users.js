const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);
//router.get('/profile/:id', usersController.profile);

module.exports = router;
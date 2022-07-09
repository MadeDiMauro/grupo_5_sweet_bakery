const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");

const { body } = require ("express-validator");

const validation = [
    body('user').notEmpty().withMessage('Ingresa tu usuario'),
    body('password_login').notEmpty().withMessage('Ingresa tu contraseña'),
]

router.get('/login', usersController.login);
router.post('/login', validation, usersController.processlogin);

router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);

//router.get('/profile/:id', usersController.profile);

module.exports = router;
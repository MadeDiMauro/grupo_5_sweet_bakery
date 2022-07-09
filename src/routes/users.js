const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const guestMiddleware= require ("../middlewares/guestMiddleware"); 
const authMiddleware=require ("../middlewares/authMiddleware");

const { body } = require ("express-validator");

const validation = [
    body('user').notEmpty().withMessage('Ingresa tu usuario'),
    body('password_login').notEmpty().withMessage('Ingresa tu contraseña'),
]

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validation, usersController.processlogin);

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', usersController.processRegister);

router.get('/profile', authMiddleware, usersController.profile); 
router.get ('/logout', usersController.logout);   /*para que se desloguee*/

module.exports = router;
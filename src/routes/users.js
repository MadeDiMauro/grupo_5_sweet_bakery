const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const uploadAvatar = require('../middlewares/multerAvatarUser');
const validationsRegister = require('../middlewares/validationsRegister');

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', uploadAvatar.single('avatar'), validationsRegister, usersController.processRegister);
//router.get('/profile/:id', usersController.profile);

module.exports = router;
const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const uploadAvatar = require('../middlewares/multerAvatarUser');
const validationsRegister = require('../middlewares/validationsRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware");
const validationsLogin = require('../middlewares/validationsLogin');

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', validationsLogin, usersController.processLogin);

router.get('/register', guestMiddleware, usersController.register);
router.post('/register',  uploadAvatar.single('avatar'), validationsRegister,  usersController.processRegister);

router.get('/edit/:id', authMiddleware, usersController.edit);
router.post('/edit',  uploadAvatar.single('avatar'), /*validationsRegister,*/ usersController.processEdit);

router.get('/profile', authMiddleware, usersController.profile); 
router.get ('/logout', usersController.logout);

module.exports = router;
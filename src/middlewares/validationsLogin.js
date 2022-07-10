const { body } = require ("express-validator");

const validationsLogin = [
    body('user').notEmpty().withMessage('Ingresa tu usuario'),
    body('password_login').notEmpty().withMessage('Ingresa tu contraseña'),
]

module.exports = validationsLogin;
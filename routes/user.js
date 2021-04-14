const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const { check } = require ('express-validator');

router.post('/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('identification', 'La Cedula de Ciudadania es obligatorio').not().isEmpty(),
        check('tp', 'El numero de tarjeta profesional es obligatorio').not().isEmpty(),
        check('email', 'El correo el electronico es importante').isEmail(),
        check('password', 'El password debe ser minimo 6 caracteres').isLength({min: 6})
    ],
    userController.newUser
)

module.exports = router
const express = require('express');
const router = express.Router();
const authController = require ('../controllers/authController');
const { check } = require ('express-validator');

router.post('/',
    [
        check('email', 'El correo el electronico es importante').isEmail(),
        check('password', 'El password debe ser minimo 6 caracteres').isLength({min: 6})
    ],
    authController.authUser
)

module.exports = router
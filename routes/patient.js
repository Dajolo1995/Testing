const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const auth = require("../middleware/auth");
const { check } = require ('express-validator');

router.post("/", 

    auth,
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('identification', 'La Cedula de Ciudadania es obligatorio').not().isEmpty(),
        check('direction', 'El numero de tarjeta profesional es obligatorio').not().isEmpty(),
        check('email', 'El correo el electronico es importante').isEmail(),
        check('phone', 'El password debe ser minimo 6 caracteres').isLength({min: 6})
    ],
    patientController.newPatient
);

router.get("/", 
    auth,
    patientController.obtainPatient
)


module.exports = router;

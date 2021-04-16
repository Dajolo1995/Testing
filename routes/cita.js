const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController')
const auth = require("../middleware/auth");
const { check } = require ('express-validator');

router.post('/',
    auth,
    [
        check('cita', 'Agregue una cita').not().isEmpty()
    ],
    citaController.newCita
)

router.get('/', 

    auth,
    citaController.obtainCita
)

module.exports = router
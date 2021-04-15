const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController')
const auth = require("../middleware/auth");
const { check } = require ('express-validator');

router.post('/',
    auth,
    [
        check('cita', 'Agregue una cita').not().isEmpty()
    ],
    quotesController.newQuotes
)

router.get('/', 

    auth,
    quotesController.obtainQuotes
)

module.exports = router
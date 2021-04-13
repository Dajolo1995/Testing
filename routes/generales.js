const express = require ('express');
const router = express.Router();

router.post('/', () =>{
    console.log('Creando un usuario de medico general')
});

module.exports = router;
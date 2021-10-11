const express = require('express');
const router = express.Router();
const usersController = require ('../controllers/usersController');


// Ir agregando acá las rutas con métodos de usuarios que estarán en el controlador.

router.get('/:id',  usersController.detalle );


module.exports = router;
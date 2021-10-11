const express = require('express');
const router = express.Router();
const detalleController = require ('../controllers/productsController');



//Ir agregando métodos de producto que deberan estar en el controller de producto


router.get('/:id',  productsController.detalle );


module.exports = router;
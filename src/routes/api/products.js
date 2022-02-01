const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de todos los productos
router.get('/', productsAPIController.list);
//Agarrar último producto
router.get("/latest", productsAPIController.latest);
//Detalle del producto
router.get('/:id', productsAPIController.detail);



module.exports = router;
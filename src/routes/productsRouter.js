const express = require('express');
const router = express.Router();
const productsController = require ('../controllers/productsController');



//Ir agregando métodos de producto que deberan estar en el controller de producto

// /products/detail/xxxxx caera acá
router.get('/detail/:id',  productsController.detail );
router.get('/detail/',  productsController.detail );
// /products/cart caerá acá
router.get('/cart',  productsController.cart );

module.exports = router;
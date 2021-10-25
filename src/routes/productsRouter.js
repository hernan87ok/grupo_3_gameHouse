var express = require('express');
var router = express.Router();

const productsController = require ('../controllers/productsController');

//Ir agregando métodos de producto que deberan estar en el controller de producto

// formulario crear productos

router.get('/create/', productsController.create);

// formulario editar productos

router.get('/edit/:id/', productsController.edit);
router.put('/edit/:id/', productsController.update);

// eliminar producto

router.delete('/delete/:id/',  productsController.destroy);

// /products/cart caerá acá

router.get('/cart/',  productsController.cart );

// /products/detail/xxxxx caera acá

router.get('/detail/', productsController.detail);
router.get('/detail/:id/',  productsController.detail);


module.exports = router;
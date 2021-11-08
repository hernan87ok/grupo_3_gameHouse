var express = require('express');
var router = express.Router();
var path = require('path');
const multer = require ('multer');
//Configuro multer
const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, path.join(__dirname,'..','..','public/img/covers/'));
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`); 
    }
});

const uploadFile = multer ({storage});
const productsController = require ('../controllers/productsController');

//Ir agregando métodos de producto que deberan estar en el controller de producto

//Home de productos 

router.get('/', productsController.index);

// formulario crear productos

router.get('/create/', productsController.create);

//POST de crear productos, ACTION

router.post('/', productsController.store);

// formulario editar productos

router.get('/:id/edit', productsController.edit);

//PUT edición de productos, ACTION

router.put('/:id/', uploadFile.single('imagenProducto'),productsController.update);

// DELETE de productos, ACTION

router.delete('/:id/',  productsController.destroy);

// /products/cart caerá acá

router.get('/cart/',  productsController.cart );


// /products/detail/xxxxx caera acá

// router.get('/detail/', productsController.detail);

// /products/xxx caerá acá también.

router.get('/:id/',  productsController.detail);


module.exports = router;
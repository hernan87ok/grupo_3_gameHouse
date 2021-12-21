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

//Se reemplazó por .add debajo
// router.get('/create/', productsController.create);

//POST de crear productos, ACTION
//Se reemplazó debajo por método con DB
// router.post('/', uploadFile.single('imagenProducto'), productsController.store);

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

// ------------ RUTAS PARA CRUD CON DB ------------- //
//Formulario de creación
// router.get('/add', productsController.add); //OK
//Crea lo mostrado en el anterior
// router.post('/', uploadFile.single('imagenProducto'), productsController.createDB); //OK

//Formulario de edición
// router.get('/edit/:id', productsController.editDB); //OK
//Edita lo mostrado en el anterior
// router.put('/update/:id', productsController.updateDB);

//Formulario de borrado
// router.get('/delete/:id', productsController.deleteDB);
//Borra lo mostrado en el anterior
// router.delete('/delete/:id', productsController.destroyDB);

//Buscador de productos
// router.post('/buscar', productsController.buscar);

// ------------------------------------------------- //


module.exports = router;
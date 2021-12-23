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

//reemplazado debajo por indexDB
// router.get('/', productsController.index);

// formulario crear productos

//Se reemplazó por .add debajo
// router.get('/create/', productsController.create);

//POST de crear productos, ACTION
//Se reemplazó debajo por método con DB
// router.post('/', uploadFile.single('imagenProducto'), productsController.store);

// formulario editar productos
//Se reemplazo debajo por método editDB
// router.get('/:id/edit', productsController.edit);

//PUT edición de productos, ACTION
//Se reemplazó debajo por método updateDB
// router.put('/:id/', uploadFile.single('imagenProducto'),productsController.update);

// DELETE de productos, ACTION
//Se reemplazó por método idéntico pero por DB debajo
// router.delete('/:id/',  productsController.destroy);

// /products/cart caerá acá

router.get('/cart/',  productsController.cart );


// /products/detail/xxxxx caera acá

// router.get('/detail/', productsController.detail);

// /products/xxx caerá acá también.

//Se reemplazó por idéntico método debajo pero con DB
// router.get('/:id/',  productsController.detail);

// ------------ RUTAS PARA CRUD CON DB ------------- //
//Index de productos en db
router.get('/', productsController.indexDB);

//Formulario de creación
router.get('/create/', productsController.add); //OK
//Crea lo mostrado en el anterior
router.post('/', uploadFile.single('imagenProducto'), productsController.createDB); //OK

//Formulario de edición
router.get('/:id/edit', productsController.editDB); //OK
//Edita lo mostrado en el anterior
router.put('/:id/', uploadFile.single('imagenProducto'), productsController.updateDB); //OK

//Formulario de borrado
// router.get('/delete/:id', productsController.deleteDB); //No se implementó
//Borra lo mostrado en el anterior
router.delete('/:id/', productsController.destroyDB); //ok

//Detalle por producto
router.get('/:id/', productsController.detailDB); //OK

//Buscar
router.get('/search/:search/', productsController.search);



// ------------------------------------------------- //


module.exports = router;
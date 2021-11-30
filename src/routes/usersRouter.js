var express = require('express');
var router = express.Router();

//Requiero a Path para poder codear filename
const path = require('path');

//Controller
const usersController = require('../controllers/usersController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Formulario de Registro
router.get('/register', guestMiddleware, usersController.register);

//Procesar el Registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

//Formulario de Login
router.get('/login', guestMiddleware, usersController.login);

//Procesar el Login
router.post('/login', usersController.loginProcess);


//Perfil de usuario
router.get('/profile', authMiddleware, usersController.profile);

// Logout
router.get('/logout', usersController.logout);

module.exports = router;
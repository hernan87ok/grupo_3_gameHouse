var express = require('express');
var router = express.Router();

//Requiero a Path para poder codear filename
const path = require('path');

//Requiere multer para subir imágenes
const multer = require('multer');

//Función body es igual a función check
const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/users')
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
})

//Método por el cual vamos a subir el archivo
const uploadFile = multer({ storage });

//Controller
const usersController = require('../controllers/usersController');

const validations = [
    body('firstName').notEmpty().withMessage('Debés escribir un nombre'),
    body('lastName').notEmpty().withMessage('Debés escribir un nombre'),
    body('email').notEmpty().withMessage('Debés escribir un correo electrónico').bail().isEmail().withMessage('Debés escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Debés escribir una contraseña'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file) {
            throw new Error('Tenés que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true
    })
 ]

//Middlewares

//Formulario de Login
router.get('/login', usersController.login);

//Formulario de Registro
router.get('/register', usersController.register);

//Procesar el Registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

//Perfil de usuario
router.get('/profile/:userId', usersController.profile);

module.exports = router;
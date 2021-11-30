const path = require('path');

//Función body es igual a función check
const { body } = require('express-validator');

module.exports = [
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
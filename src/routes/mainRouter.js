var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');


router.get('/', mainController.index);





module.exports = router;
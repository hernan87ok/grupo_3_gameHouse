var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
const productsController = require('../controllers/productsController');


router.get('/', mainController.home);

// router.get('/main/index/', mainController.index);



module.exports = router;
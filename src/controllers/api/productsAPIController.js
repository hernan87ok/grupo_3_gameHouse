const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { entries } = require('../../middlewares/validateRegisterMiddleware');

//Modelo de DB para los productos
const Products = db.Product;
const Categories = db.Category;


const productsAPIController = {
    'list': (req, res) => {
        Categories.findAll().then(allCategories => {

        
        Products.findAll(
            {
                include: [{association : "category"}]
            }
        )
        .then(allProducts => { //aca abajo hacer un foreach y crear el nuevo array ???
           
            let cantCat1 = 0;
            let cantCat2 = 0;
            let cantCat3 = 0;
            let cantCat4 = 0;


            let productos = [];

            allProducts.forEach(element => {
                if(element.category.ID == 1)
                cantCat1++;
                if(element.category.ID == 2)
                cantCat2++;
                if(element.category.ID == 3)
                cantCat3++;
                if(element.category.ID == 4)
                cantCat4++;
                let categoriesArray = [];
                categoriesArray.push(element.category.category);
                let producto = {
                id : element.ID,
                name : element.name,
                description : element.description,
                detail : '/api/products/' + element.ID,
                categories : categoriesArray
                }
                productos.push(producto);
            });

      
            let rta = {
            count : productos.length,
            countByCategory : {
                juegosPs4: cantCat2,
                juegosPs5: cantCat1,
                juegosSwitch: cantCat3,
                juegosXbox: cantCat4
            },
            catCount : allCategories.length,
            products : productos
            }
            
            let respuesta = {
                meta: {
                    status : 200,
                    total: productos.length,
                    url: 'api/products'
                },
                data: rta
            } 
                res.json(respuesta);
            })})
    },
    
    'detail': (req, res) => {
        Products.findByPk(req.params.id, {
            include: [{association : 'category'}]
        })
        .then(function(product){detail(product, res)})  
    },

    'latest': (req,res) =>{
        Products.findOne({order: [['createdAt', 'DESC']]})
        .then(function(product){detail(product, res)})
    }
}
function detail(product, res){
            let respuesta;
            if(product != null ) {
            let category = [];
            category.push(product.category);
            let encontrado = {
                id : product.ID,
                name : product.name,
                price : product.price,
                description : product.description,
                rubro : product.console,
                url : '/img/covers/' + product.image
            }
            respuesta = {
                meta: {
                    status: 200,
                    total: 1,
                    url: '/api/products/:id'
                },
                data: encontrado
            }

        } else {
             respuesta = {
                meta: {
                    status: 204,
                    total : 0,
                    url: '/api/products/:id'
                },
                data: null
            }
        }
            res.json(respuesta);
    }
    

module.exports = productsAPIController;
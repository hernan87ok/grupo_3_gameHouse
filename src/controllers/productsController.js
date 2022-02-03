const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/* La constante "toThousand" deben enviarla como parametro en el res.render,
les ayudará para mostrar el precio final adecuadamente con 
una cantidad de decimales fija. Es una función, solamente deben poner
como parámetro el precio final (en el archivo ejs): toThousand(finalPrice)*/
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//Soporte DB - Sequelize
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

let Products = db.Product;
let Categories = db.Category;
// ----


const productsController = {



  index: (req, res) => {
    res.render('./products/list', {
      productsSent: products
    });
  },

  detail: (req, res) => {
      const id = req.params.id;
      const product = products.find(product => {
        return product.id == id
      })
      res.render('./products/detail', {
        productSent: product
      })
    },

  cart: (req, res) => {
      res.render('./products/cart')
    },

  create: (req, res) => {
    res.render('./products/product-create')
  },
  
  edit: (req, res) => {
    const id = req.params.id;
      const product = products.find(product => {
        return product.id == id
    })

    res.render('./products/product-edit', {
      productSent: product
    })
  },

  update: (req, res) => {
    let id = req.body.idProducto;
		let productToEdit = products.find(product => {
			return product.id == id;
		});


    // console.log(productToEdit);
		let editedProduct = {
			id: id,
			name: req.body.nombreProducto,
			price: req.body.precioProducto,
			category: req.body.categoriaProducto,
			description: req.body.descripcionProducto,
      //se sube con multer
			image: req.file ? req.file.filename : productToEdit.image
		}
		
		/* Modificamos el array */
		products.forEach((producto, index) => {
			if (producto.id == id){
				products[index] = editedProduct;
			}
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/products");
	

    // res.send("Producto con id " + req.params.id + " producto editado y guardado!")
  },

  destroy: (req, res) => {
    const id = req.params.id
    const finalProducts = products.filter(product => {
			return product.id != id
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
    res.redirect("/products");
  },
  
  // (post) Create - Método para guardar la info
  store: (req, res) => {
    const newProduct = {
      //Guardamos el producto
      id: products[products.length - 1].id + 1,
      name: req.body.nombre,
      price: req.body.precio,
      category: req.body.category,
      description: req.body.descripcion,
      console: req.body.console,
      image: req.file ? req.file.filename : null
    }

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    res.redirect("/products")
  },

  

// ------ METODOS CRUD DB -------- //


indexDB: (req, res) => {
  const options = {include: ['category']}
  if (req.query.search) {
    options.where = {name: {[Op.like]: `${req.query.search}%`}}
  }
  let products = Products.findAll(options, );
  Promise
  .all([products])
  .then ( ([products]) => {
   
      res.render('./products/list', {
      productsSent: products
    })
  })
  .catch(error => res.send(error))
}, 
//end index


//MOSTRAR FORMULARIO PARA CREAR PRODUCTO 

add: function (req, res) {
  let allProductCategories = Categories.findAll();
  
  Promise
  .all([allProductCategories])
  .then(([allProductCategories]) => {
      return res.render('./products/product-create', {allProductCategories})})
  .catch(error => res.send(error))
}, //end add


//CREAR NUEVO PRODUCTO
createDB: (req, res) => {

  // console.log(req.body.category);


      //Validación producto 5 letras  (Sprint 7)
      //Si no cumple retorna al home productos
      if(req.body.nombre.length < 5) {
        return res.redirect('/products/')
      }
      // Fin validación producto 5 letras  

      //Validación descripción 20 letras  (Sprint 7)
      //Si no cumple retorna al home productos
      if(req.body.descripcionProducto.length < 20) {
        return res.redirect('/products/')
      }
      // Fin validación producto 5 letras 

    //Validacion extensión de imágen

    let admitted= ['.jpg','.jpeg','.png','.gif'];
    if( req.file && (! (admitted.includes( req.file.filename.match(/\.[0-9a-z]+$/i)[0]) )  ) ) {
      
      
      return res.redirect('/products/')
    
    }
    //Fin validación de extensión imágen (Sprint 7)




  const newProduct = {
    //Creamos el producto que luego persistimos

    name: req.body.nombre,
    price: req.body.precio,
    id_category: req.body.category, //El ID de la categoria, no el nombre.
    description: req.body.descripcionProducto,
    console: req.body.formRubro, // El campo Categoria del formulario (Accion, shooter, etc)
    image: req.file ? req.file.filename : null
   };

//persistencia
Products
.create(newProduct)

.then(()=> {
  res.redirect("/products")})

.catch (error => res.send(error))

}, // Fin create

//FORMULARIO DE EDICIÓN CON DB.
editDB: (req, res) => {
  let id = req.params.id;
  let categories = Categories.findAll();
  let productToEdit = Products.findByPk(id, {include: ['category']});
  Promise
  .all([productToEdit, categories])
  .then(([Product, allCategories]) => {
    // console.log(Product);
    return res.render('./products/product-edit',
    {
      productSent : Product,
      categories :  allCategories
    });
  })
  .catch(error => res.send(error))
},


//EDICIÓN EN DB

updateDB: function (req,res) {
 let idProducto = req.body.idProducto;
 Products
 .update (
   {
    name: req.body.nombreProducto,
    price: req.body.precioProducto,
    id_category: req.body.idCategoriaProducto, //Ojo con este que no estaba en el anterior
    description: req.body.descripcionProducto,
    //se sube con multer
    image: req.file ? req.file.filename : null
   },
   {
     where: {ID: idProducto}
   })
   .then(() => {
     return res.redirect('/products')})
    .catch(error => res.send(error))
   },

//end updateDB - end Edición


destroyDB: function (req,res) {
  let productId = req.params.id;
  Products
  .destroy({where: {id: productId}, force: true})
  .then (()=>{
    return res.redirect('/products')})
    .catch(error => res.send(error))
},
//end destroyDB

detailDB:  (req, res) => {
  Products.findByPk(req.params.id,
      {
          include : ['category']
      })
      .then(productSent => {
          res.render('./products/detail', {productSent});
      });
},
}

module.exports = productsController;
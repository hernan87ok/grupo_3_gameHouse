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
    res.send("Producto con id " + req.params.id + " producto editado y guardado!")
  },

  destroy: (req, res) => {
    res.send("Producto con id " + req.params.id + " eliminado!")
  },

  store: (req, res) => {
    //Guardar un nuevo producto, falta implementar
  }

  }

module.exports = productsController;
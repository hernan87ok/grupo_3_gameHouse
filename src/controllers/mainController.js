
// let platos = [
//   {
//   nombre: 'Carpaccio fresco',
//   descripcion: 'Entrada Carpaccio de salmón con cítricos',
//   precio: 'U$S 65.50',
//   },
//   {
//   nombre: 'Risotto de berenjena',
//   descripcion: 'Risotto de berenjena y queso de cabra ',
//   precio: 'U$S 47.00',
//   },
//   {
//   nombre: 'Mousse de arroz',
//   descripcion: 'Mousse de arroz con leche y aroma de azahar ',
//   precio: 'U$S 27.50',
//   },
//   {
//   nombre: 'Espárragos blancos',
//   descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
//   precio: 'U$S 37.50',
//   }];


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



const mainController = {


    home: (req, res) => {
      res.render('./main/home.ejs');
    },

    index: (req, res) => {
      res.render('./main/index.ejs', {
        productsSent: products
      });
    }
};

module.exports = mainController;

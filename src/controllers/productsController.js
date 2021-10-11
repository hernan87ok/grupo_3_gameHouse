
// let platos = [
//     {
//     id: 1,
//     nombre: 'Carpaccio fresco',
//     descripcion: 'Entrada Carpaccio de salmón con cítricos',
//     precio: 'U$S 65.50',
//     },
//     {
//     id:2,
//     nombre: 'Risotto de berenjena',
//     descripcion: 'Risotto de berenjena y queso de cabra ',
//     precio: 'U$S 47.00',
//     },
//     {
//     id:3,
//     nombre: 'Mousse de arroz',
//     descripcion: 'Mousse de arroz con leche y aroma de azahar ',
//     precio: 'U$S 27.50',
//     },
//     {
//     id:4,
//     nombre: 'Espárragos blancos',
//     descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
//     precio: 'U$S 37.50',
//     }];
  
  
  
  
  
  // const detalleController = {
  
  
  //     detalle: (req, res) => {
        
  //       let idPlato = req.params.id;
  //       let plato = null;

  //       platos.forEach(function (elemento) {

  //           if(elemento.id == idPlato)
  //               plato = elemento;

  //       })

  //       res.render('detalleMenu.ejs', {plato} );
  //     },
  // };


  
  const productsController = {

    detail: (req,res) => {
      //Acá habrá que agarrar el ID que se pasará como parámetro, ver ejemplo arriba 
      res.render('./products/detail.ejs');
    },

    cart: (req,res) => {
      res.render('./products/cart.ejs');
    }

  }


  module.exports = productsController;
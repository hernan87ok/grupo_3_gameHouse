const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require ('./routes/usersRouter');

app.use(express.static('public'));

app.set ("view engine", "ejs");

// Enlaces a routers

//Main
app.use('/', mainRouter);
//Productos
app.use('/products', productsRouter);
//Usuarios
app.use('/users', usersRouter);

//


app.listen(3500, () => { console.log('Servidor corriendo en http://localhost:3500');})
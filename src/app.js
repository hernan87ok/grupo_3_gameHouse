// Require's
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

// Express
const app = express();

// Route System require and use
const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require ('./routes/usersRouter');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

// Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set ("view engine", "ejs");

//
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Server Listen

app.listen(3500, () => { console.log('Servidor corriendo en http://localhost:3500');})
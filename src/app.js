// Require's
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

// Express
const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);

// Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set ("view engine", "ejs");

//Permite recibir la información que viaja a través de un formulario vía POST
app.use(express.urlencoded({ extended: false })); 


app.use(express.json()); 
app.use(express.static('./public'));
app.use(methodOverride('_method'));

// Route System require and use

const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require ('./routes/usersRouter');



//Aquí llamo a la ruta de las api de users
const apiUsersRouter = require('./routes/api/users');
//Aquí llamo a la ruta de las api de products
//const apiProductsRouter = require('./routes/api/products');

//Aquí creo la colección de mis recursos  (APIs)
app.use('/api/users', apiUsersRouter);
//app.use('/api/products',apiProductsRouter);

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);



// Server Listen

app.listen(3500, () => { console.log('Servidor corriendo en http://localhost:3500');})
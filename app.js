const express = require ('express');
const app = express();

app.listen(3030, () => {

    console.log('Servidor corriendo OK');
}

);
const path = require ('path');

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'));
});
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});


// app.post('/register', (req, res) => {
//     res.redirect('/');
// });

// app.post('/', (req, res) => {
//     res.redirect('/');
// });
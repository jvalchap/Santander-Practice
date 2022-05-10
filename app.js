const express = require('express');

const app = express();

const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('./public'));

app.set('view engine', 'views');

app.use('/', mainRoutes);

app.listen(3000, () => {
    console.log('El servidor funciona');
})



// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, '/views/home.ejs'));
// })

// app.get('/404', function(req, res){
//     res.send('Error página no encontrada');
// })

// const path = require('path');
// const controller = {
//     mostrarProductos : (req, res) => {
//         res.render('home');
//     }
// };
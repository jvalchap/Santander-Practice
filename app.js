app.set('view engine', 'ejs');

const express = require('express');
const app = express();
const path = require('path');


app.listen(3000, () => {
    console.log('El servidor funciona');
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/home.html'));
})

app.get('/404', function(req, res){
    res.send('Error página no encontrada');
})




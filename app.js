/* const express = require('express');
const app = express();

app.listen(3000,() => {
    console.log('Server on');
})

app.get('/', function(req, res){
    res.send('Welcome to the site');
})

app.get('/contact', function(req, res){
    res.send('Welcome to the contacts section');
})

const path = require('path');

app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'))
}) */

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




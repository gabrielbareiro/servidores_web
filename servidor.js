const express = require('express');

const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 8080;

// leo el archivo de forma sincrona

const products = fs.readFileSync('./products.txt', 'utf-8')

const productsParse = JSON.parse(products)

const getProducts = productsParse.map(p => p.title)

// respuesta con el nombre de los productos

app.get('/products', (req, res) => {
    
    res.send(` ${JSON.stringify(getProducts, null, 2)}`)
});

// devuelvo un producto al azar

let rand = Math.floor(Math.random()*getProducts.length);

let rProducts = getProducts[rand];

console.log(rProducts)

app.get('/productsRandom', (req, res) => {
    res.send(`${JSON.stringify(rProducts, null, 2)}`)
});

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => console.log(`Error en servidor ${error}`));
 

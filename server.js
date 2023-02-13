const express = require('express')
const app = express();
const port = 8080;

const products = require('./products.json');

app.get('/products', (req, res) =>{
    const limit = req.query.limit;
    res.json(products.slice(0, limit));

});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const products = products.find(p => p.id === id);
    if(products) {
        res.json(product);
    } else {
        res.status(404).send({error: 'El producto no existe'});
    }
});

app.listen(port, () => {
    console.log('El servidor ha sido activado en el puerto 8080');
})
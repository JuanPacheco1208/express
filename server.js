const express = require('express');

let app = express();

app.get('/', function(req, res) {
    res.send('<b>Mi</b> Primer servidor express');
});

app.route('/article')
.get(function(req, res) {
    res.send('Get the article');
})

.post(function(req, res) {
    res.send('Obteniendo articulo');
})
.put(function(req, res) {
    res.send('Artículo actualizado');
});


app.get('/welcome', function(req, res) {
    res.send('<b>¡Hola!</b> Bienvenido a mi servidor express');
});

app.get('/', function(req, res) {
    res.json({
        'myJson':'object'
    })
});

res.download('/path-to-file-txt');

res.redirect('foo/bar');
res.redirect('http//serverEjemploexpress.com');

res.send(new Buffer('whoop'));
res.send({some: 'json'});
res.send('<p>some html</p>');
res.status(404).send('Lo sentimos, no podemos encontrar lo que buscas');
res.status(500).send({error: 'algo anda mal...'});

app.get('/books/:user/category/:categorySlug', function(req, res) {
    console.log(req.params);
    let username = req.params.user;
    let category = req.params.categorySlug;
    res.send(req.params);
});

app.use(function(req, res, next) {
    res.status(404).send("Lo siento, esa ruta no existe, busque una nueva ruta :D");
});

app.listen(3000, function() {
    console.log('Aplicación en el puerto 8080');
});
const calculos = require('./calculos.js');
const http = require('node:http');

console.log(calculos.suma(1, 2));

const server = http.createServer(function (request, response) {

});

server.listen(3000, function (err) {
    if (err) {
        console.log(`Error al abrir el puerto 3000: ${err}`);
    }
    else {
        console.log('Servidor escuchando en el puerto 3000');
    }
});
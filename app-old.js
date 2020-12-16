const http = require('http');
const server = require('express');




http.createServer( (req,res ) => {

    res.writeHead(200, { 'Content-Type': 'application/json'});

    let salida = {
        nombre: 'jp',
        edad: 27,
        url : req.url
    }
    res.write(JSON.stringify(salida));
    res.end()
}).listen(8585)

console.log("Listening on port 8585")
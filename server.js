const factsModule = require('./facts-module');
const i = Math.floor(Math.random() * 3);
const http = require('http');


http.createServer((req, res) => {
    const i = Math.floor(Math.random() * 3);
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(factsModule.facts[i]),
    res.end();
}).listen(3000);



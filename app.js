const http = require('http')
const fs = require('fs')

//create a folder static contains files.
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/example.json')
    res.writeHead(200,{'Content-type': 'text/html'})
    readStream.pipe(res)
}).listen(3000)
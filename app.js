//create a simple
// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.write('Hello World from nodejs')
//     res.end()
// })

// server.listen(3000)

const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.write('Hello world from nodejs')
        res.end()
    }
    else{
        res.write('using another domain')
        res.end()
    }
})

server.listen(3000)
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/example', (req,res) => {
    res.send('hitting example route')
})

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send('example with route params')
})

app.listen(3000)
//create a 'example.txt' file to practice
const fs = require('fs')
const readStream = fs.createReadStream('./example.txt','utf-8')
const writeStream = fs.createWriteStream('example2.txt')


//write into another file
readStream.on('data', (chunk) => {
    writeStream.write(chunk)
})

//read file
readStream.on("data", (chunk) => {
    console.log(chunk)
})
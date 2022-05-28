const fs = require('fs')
// const readStream = fs.createReadStream('./example.txt','utf-8')
// const writeStream = fs.createWriteStream('example2.txt')

//write file
// readStream.pipe(writeStream)

//compress file
const zlib = require('zlib')
// const gzip = zlib.createGzip()

// const readStream = fs.createReadStream('./example.txt', 'utf-8')
// const writeStream = fs.createWriteStream('compressed.zip')
// readStream.pipe(gzip).pipe(writeStream)

//uncompress file
const gunzip = zlib.createGunzip()
const readStream = fs.createReadStream('./compressed.zip')
const writeStream = fs.createWriteStream('uncompressed.txt')
readStream.pipe(gunzip).pipe(writeStream)
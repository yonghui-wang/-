const fs = require('fs')
const zlib = require('zlib')
var count = 0
var fileReadStream = fs.createReadStream('data.json')
var fileWriteStream = fs.createWriteStream('data.json.gz')

fileReadStream.on('data', (chunk) => {
    console.log(chunk);
   
})

fileReadStream.pipe(zlib.createGzip()).pipe(fileWriteStream)
/* fileReadStream.on('data', (chunk) => {
    console.log(chunk);
    fileWriteStream.write(chunk)
})

fileReadStream.on('data', (chunk) => {
  //  console.log(`${count++}读取： ${chunk.length}`);
})


fileReadStream.on('error', (err) => {
    console.log(err);
})

fileReadStream.on('end', () => {
    console.log('--结束--');
}) */
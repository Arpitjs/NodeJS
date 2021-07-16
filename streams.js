// writable streams - allow nodejs to write data into a stream
// readable streams - allow nodejs to read data into a stream
// duplex - can read and write to a stream

let fs = require('fs')

let myReadStream = fs.createReadStream(__dirname + '/lorem.txt')
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStream.on('data', chunk => {
    console.log('new chunk receieved')
    myWriteStream.write(chunk)
})

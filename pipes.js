// take data from read stream then pipe it to write stream
// pipe acts like a buffer here

let http = require('http')
let fs = require('fs')

let myReadStream = fs.createReadStream(__dirname + '/lorem.txt')
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

myReadStream.pipe(myWriteStream)

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    let myReadStream = fs.createReadStream(__dirname + '/lorem.txt')
    myReadStream.pipe(res)
})

server.listen(3000)
console.log('listening on port 3000')


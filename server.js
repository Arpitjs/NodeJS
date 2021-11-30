const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    console.log(url.host)
    const parsedUrl = req.url.split('/')
    console.log(parsedUrl)
    const action = parsedUrl[1]
    const fileName = parsedUrl[2]
    const content = parsedUrl[3]
    if (action === 'write') {
        fs.writeFile(`./${fileName}.txt`, content, (err, done) => {
            if (err) console.log(err)
            console.log('FILE WRITTEN.')
        })
    }
    if (action === 'read') {
        fs.readFile(`./${fileName}.txt`, 'utf-8', (err, done) => {
            if (err) console.log(err)
            console.log('READING FILE...', done)
        })
    }
    if (action === 'rename') {
        fs.rename(`./${fileName}.txt`, content, (err, done) => {
            if (err) console.log(err)
            console.log('RENAMED.')
        })
    }
    res.end('hi')
})

server.listen(8080, (err, done) => {
    if (err) console.log(err)
    console.log('server listening.')
})
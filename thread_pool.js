const fs = require('fs')
const crypto = require('crypto')
const start = Date.now()

//channge thread pool's default size(4)
process.env.UV_THREADPOOL_SIZE = 1

fs.readFile('text-file.txt', () => {
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', (err, pswd) => {
    // console.log('password encrypted '+ pswd)
    console.log(`Password encrypted in: ${Date.now() - start}`)
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`Password encrypted in: ${Date.now() - start}`)
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`Password encrypted in: ${Date.now() - start}`)
})
crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(`Password encrypted in: ${Date.now() - start}`)
})
})
const crypto = require('crypto')

// console.log(crypto.randomBytes(12).toString('binary'))

// This example finds the SHA-256 hash for the string, "I love node"
// The update method is used to push data to later be turned into a hash with the digest method. 
// The argument for digest represents the output format, and may either be "binary", "hex" or "base64". It defaults to binary.

const myHash = crypto
.createHash('sha256')
.update('I love node')
.digest('hex')

crypto
.pbkdf2('hashthis', 'salt', 5000, 12, 'sha512', (err, done) => console.log('Password Encrypted', done.toString('hex')))

console.log(myHash)

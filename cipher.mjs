import crypto from 'crypto'
const {
  scrypt,
  randomFill,
  createCipheriv,
  createDecipheriv,
  randomBytes
} = await import('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// // First, we'll generate the key. The key length is dependent on the algorithm.
// // In this case for aes192, it is 24 bytes (192 bits).

scrypt(password, 'salt', 24, (err, key) => {
  // console.log('SECURITY KEY', key) //buffer
  if (err) throw err

  //generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) => {

    if (err) throw err
    // console.log('INIT VECTOR.', iv) //array
    const cipher = createCipheriv(algorithm, key, iv) //cipher object

    let encrypted = cipher.update('some text', 'utf-8', 'hex')

    encrypted += cipher.final('hex')
    // console.log(encrypted)

    //decryption
    const decipher = crypto.createDecipheriv(algorithm, key, iv)

    let decryptedData = decipher.update(encrypted, "hex", "utf-8")

    decryptedData += decipher.final("utf-8")

    console.log("Decrypted message: " + decryptedData)
  })
})

// The initialization vector is used here to hold 16 bytes of random data from the randomBytes() method,
//  and Securitykey contains 32 bytes of random data.

const algorithm2 = 'aes-256-cbc'
const initVector = randomBytes(16)
const SecurityKey = randomBytes(32)
// console.log('initvector & securitykey', initVector, SecurityKey) //both buffer
const cipher = createCipheriv(algorithm2, SecurityKey, initVector)
let encrypted = cipher.update('my new password', 'utf-8', 'hex')
encrypted += cipher.final('hex')
const decipher = createDecipheriv(algorithm2, SecurityKey, initVector)
let decrypted = decipher.update(encrypted, 'hex', 'utf-8')
decrypted += decipher.final('utf-8')
console.log(decrypted)
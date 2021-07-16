let fs = require('fs')

fs.readFile('./read.txt', 'utf-8', (err, result) => {
    if(err) console.log(err)
    fs.writeFile('./write.txt', result, () => console.log('write done to the file.'))
})

// console.log('reading and writing the files...')

//creating directories
fs.mkdir('stuffs', () => fs.readFile('read.txt', 'utf-8', (err, data) => {
        fs.writeFile('./stuffs/read.txt', data, () => console.log('written completed to stuff.'))
    }))

//deleting directories
//first need to delete the files in the directory
fs.unlink('./stuffs/read.txt', () => fs.rmdir('./stuffs', () => console.log('directory deleted')))
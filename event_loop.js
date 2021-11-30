let fs = require('fs')

// blocking === synchronous
// non blocking code === asyncronous
// we should not block the event loop
//actually below's commented timers arent running
// in the event loop because they arent 
// running inisde a callback function
 //its executing sychronoously

// setTimeout(() => console.log('timer 1 finished'), 0)
// setImmediate(() => console.log('setImmediate 1 finished'))

// fs.readFile('text-file.txt', (err, data) => console.log('I/O FINISHED '+ data))
// console.log('hello from top level code <non blocking>')
// ---------------------------------------------------------------------------------------
//now below's code run in event loop
// its running asyncronously
fs.readFile('text-file.txt', (err, data) => {
	setTimeout(() => console.log('timer 1 finished'), 0)
	setTimeout(() => console.log('timer 2 finished '), 3000)
	setImmediate(() => console.log('setImmediate 1 finished'))
	new Promise(res => res('abc'))
		.then(data => console.log('RESOLVED PROMISE', data))
	process.nextTick(() => console.log('PROCESS.nextTick'))
	console.log('I/O FINISHED ' + data)
})

console.log('hello from top level code <non blocking>')

// O/P without event loop
// hello from top level code (non blocking)
// timer 1 finished
// setImmediate 1 finished
// I/O FINISHED hello worlds

// O/P with event loop
// hello from top level code <non blocking>
// I/O FINISHED hello worlds
// PROCESS.nextTick
// RESOLVED PROMISE abc
// setImmediate 1 finished
// timer 1 finished
// timer 2 finished


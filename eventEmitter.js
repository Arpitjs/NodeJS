let events = require('events')
let util = require('util')

let myEmitter = new events.EventEmitter()

myEmitter.on('someEvent', msg => console.log(msg))

myEmitter.emit('someEvent','the event is emitted.')

function Person(name) {
    this.name = name
}

// the person constructor will inherit the event emiiter
util.inherits(Person, events.EventEmitter)

let jack = new Person('jack')
let rob = new Person('rob')

let peoples = [jack, rob]

peoples.forEach(people => people.on('speak', msg => console.log(`${people.name} said: ${msg}`)))

jack.emit('speak', 'hey man')
rob.emit('speak', 'whats up?')
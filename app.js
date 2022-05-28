const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('tutorial', () => {
    console.log('tutorial has occurred')
})

eventEmitter.on('tutorial', (num1, num2) => {
    console.log('result is: ', num1 + num2)
})

eventEmitter.emit('tutorial', 1, 2)

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name
    }

    get name() {
        return this._name;
    }
}

let quochuy = new Person('Quoc Huy')
quochuy.on('name', () => {
    console.log('My name is: ' + quochuy.name)
})

quochuy.emit('name')


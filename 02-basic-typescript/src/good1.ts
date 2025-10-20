let x1 = '1';
x1 = 1;
let y1 = 2;
const somBoolean = true
somBoolean = false
let someArray = [1, 2, 3]
let anotherArray = ['1', '2', '3']
let mixedArray = [1, 'hello']
let und: unknown
const myObj: object = {
    name: 'shahar'
}

type Person = {
    name: string,
    age: number,
    birthDate: Date
    eat: () => {}
}

const yossi: Person = {
    name: 'yossi',
    age: 22,
    birthDate: new Date(),
}

console.log( x1 + y1 )
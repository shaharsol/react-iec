abstract class Animal {
    constructor() {}
    abstract eat(): void
}

type Grows {
    name: string,
    birthDate: Date,
    grow(days: number): void
}

class Dog extends Animal implements Grows{
    eat(): void {

    }

    grow(): void {

    }
}

function getSomethingThatGrow(): Grows {
    return new Dog()
}

class Cat extends Animal {

}

class Fish extends Animal {

}


const dog = new Dog()
const aniaml = new Animal()
//Inheritrance is the main pillar in object oriented programming
//one class can inherit/acquire the properties, methods of another class
//The class which inherits the properties of other is known as subclass(derivied class, child class)
//The class whose properties are inherited is known as superclass

const Person = require("./basics7");

class Pet extends Person{

    get location(){
        return 'BlueCross'
    }
    constructor(firstName,lastName){
        //call parent class constructor
        super(firstName,lastName)
    }
}

let pet=new Pet('sam','san')
pet.fullName()
console.log(pet.location)
module.exports=class Person {
    age= 25
    // location='canada'

    get location(){
        return 'canada'
    }

    //constructor is method which executes by default when you create object of the class
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

    //method
    fullName(){
        return this.firstName+this.lastName 
    }
}

// let person=new Person('Tim', 'Joseph')
// let person1=new Person('Chris', 'Jhones')

// console.log(person.age)
// console.log(person.location)
// person.fullName()
// person1.fullName()
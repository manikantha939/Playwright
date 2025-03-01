//Object is collection of properties

let person={
    firstName:'Tim',
    lastName:'joe',
    age : 26,
    fullName: function(){
        return this.firstName+" "+this.lastName
    }
}
console.log(person.fullName())
console.log("-------------------------------")
console.log(person.lastName)
let name=person['lastName']
console.log(name)
person.firstName='Tim Dane'
console.log(person.firstName)
person.gender='male'
console.log(person)
console.log('gender' in person) 
console.log(person)
delete person.gender
console.log(person)
console.log("-------------------------------")
for(let key in person){
    console.log(person[key])
}

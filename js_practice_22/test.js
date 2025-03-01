// let flag=false

const Person = require('./basics7')

// if(!flag){
//     console.log("condition is satisfied")
// }else{
//     console.log("condition is not satisfied")
// }


// let marks1=Array(6)
// var marks=new Array(1,2,3,4,5,6)
// var marks=[ 1, 2, 3, 4, 5, 6 ]

// marks[2]=1
// console.log(marks)
// console.log(marks.length)
// marks.push(10)
// console.log(marks)
// marks.pop()
// console.log(marks)
// marks.unshift(100)
// console.log(marks)
// console.log(marks.shift())
// console.log(marks)
// console.log(marks.indexOf(2))
// console.log(marks.includes(6))
// var subArray=marks.slice(1,4)
// console.log(subArray)



// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i]
// }
// console.log(sum)


// console.log(marks.reduce((sum,mark)=> sum+mark,0))


// console.log("**********************************************************")

// var scores=[12,13,14,15,16]
// var evenScores=[]
// for(let i=0; i<scores.length;i++){
//     if(scores[i]%2==0){
//         evenScores.push(scores[i])
//     }
// }
// console.log(evenScores)

// console.log(scores.filter((score)=> score%2==0).map((score)=> score*2).reduce((sum,score)=> sum+score,0))



// let fruits=["Banana","Sapota","Apple","Kiwi","Orange"]
// fruits.sort()
// console.log(fruits)
// console.log(fruits.reverse())

// var scores=[12,003,9,18,16]
// console.log(scores.sort())
// console.log(scores.sort((a,b)=> b-a))

// function add(a,b){
//     return a+b
// }

// let sum=add(2,3)
// console.log(sum)

// let sumOfIntegers= function(c,d){
//     return c+d
// }
// console.log(sumOfIntegers(1,2))

// let sumOfNumbers= (c,d)=> c+d
// console.log(sumOfNumbers(1,3))


let person=new Person('hello','bye')
console.log(person.fullName()) 
console.log(person.firstName) 
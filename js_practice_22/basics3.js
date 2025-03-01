// var marks=Array(6)
// var marks=new Array(20,40,35,12,37,100)
// var marks=[20,40,35,12,37,101]

// console.log(marks[2])

// console.log(marks)

// marks.push(45)

// console.log(marks)

// marks.pop()

// console.log(marks)

// marks.unshift(12)

// console.log(marks)

// console.log(marks.indexOf(101))

// console.log(marks.includes(120))


// subMarks=marks.slice(2,5)
// console.log(subMarks)

// console.log("**********************************************************")

// for(let i=0; i<marks.length;i++){
//     console.log(marks[i])
// }

// console.log("**********************************************************")

// Approach 1
// let sum=0;
// for(let i=0; i<marks.length;i++){
//     sum=sum+marks[i]
// }
// console.log("Sum of an Array: "+sum)

// Approach 2
// let total=marks.reduce((sum,mark)=> sum+mark, 0)
// let total=marks.reduce((sum,mark)=> sum+mark, sum=0)

// console.log("Sum of an Array using reduce filtermap: "+ total)


// Find enven number using filter
var scores=[12,13,14,15,16]
var evenScores=[]
for(let i=0; i< scores.length;i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

var evenScores=scores.filter(score=> score%2==0)
console.log(evenScores)

//map
let mappedArray=evenScores.map(score=> score*3)
console.log(mappedArray)

let totlSum=mappedArray.reduce((sum,mappedArraayNum)=> sum+mappedArraayNum, 0)
console.log(totlSum)
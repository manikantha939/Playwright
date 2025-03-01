let day='tuesday '
// console.log(day.length)
// let subDay= day.slice(0,4)
// console.log(subDay)
// console.log(day[1])

// let splitDay=day.split("s")
// console.log(splitDay[1].length)
// console.log(splitDay[1].trim().length)

let date= '23'
let nextDate='27'
let diff=parseInt(nextDate)-parseInt(date)
console.log(diff)
console.log(typeof(diff))
diff.toString()
console.log(typeof(diff))

let newQuote= day+"is funday day"
console.log(newQuote)
console.log(newQuote.indexOf("day"))

let val=newQuote.indexOf("day", 5)
console.log(val)


let count = 0
let a=newQuote.indexOf("day")
while(a!==-1){
    count++
    a=newQuote.indexOf("day", a+1)
}
console.log(count)
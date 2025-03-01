const flag=true

// if(!flag)
// {
//     console.log("Condition satisfied")
// }else{
//     console.log("Condition not satisfied")
// }

// while(flag){
//     console.log("Inside the loop")
// }

let i=0
// while(i<10){
//     i++
//     console.log(i)
// }

do{
    i++
    console.log(i)
}while(i<0)

let n=0 
for(let k=0;k<=100;k++){
    if(k%2 == 0 || k%5 == 0){
        console.log(k)

    n++
    if(n==10){
        break
    }
}
}
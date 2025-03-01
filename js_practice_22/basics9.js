// var createCounter = function(n) {
//     // let a=[]
//     // for (let i = 0; i < 3; i++) {
//     //   a[i] = n + i;
//     // }
//     let a=Array.from({length:3},(_,i)=>n+i)
// return a
// };

// console.log(createCounter(10))

// var expect = (val)=> {
//   return {
//     toBe: (val2) => {
//       if (val !== val2) {
//         throw new Error("Not Equal")
//       }else{
//         return true;
//       }
//     },
//     notToBe: (value) => {
//       if (val === value) {
//         throw new Error("Equal")
//       }else{
//         return true;
//       }
//     },
//   };
// };

// try{
//     console.log(`{"value": ${expect(5).toBe(5)}}`);
// }catch(error){
//     console.log(`{"error": ${error.message}}`)
// }

// let calls = ["increment","increment","decrement","reset","reset"];
// var createCounter = (init) => {
//   let counter = [];
//   let temp = init;
//   for (let i = 0; i < calls.length; i++) {
//     if (calls[i] === "increment") {
//       counter[i] = ++init;
//     } else if (calls[i] === "reset") {
//         init=temp;
//       counter[i] = init;
//     } else if (calls[i] === "decrement") {
//       counter[i] = --init;
//     }
//   }
//   return counter;
// };

// console.log(createCounter(0));

// var createCounter = function (init) {
//   let temp = init;
//   increment = () => {
//     return ++init;
//   };

//   reset = () => {
//     return (init = temp);
//   };

//   function decrement() {
//     return --init;
//   }
//   return { increment, decrement, reset };
// };

// console.log(createCounter(5).increment());
// console.log(createCounter(5).reset());
// console.log(createCounter(5).decrement());

// let createCounter1 = (value) => {
//   let initValue = value;
//   return {
//     increment: () => {return ++value},
//     reset: () => {return value = initValue;},
//     decrement: () => {return --value;},
//   };
// };

// console.log(createCounter1(5).increment())
// console.log(createCounter1(5).reset())
// console.log(createCounter1(5).decrement())

// let counter1=createCounter1(5)
// console.log(counter1.increment())

// let createCounter2=(value)=>{
//     return ()=> ++value
// }

// let counter=createCounter2(5)

// console.log(counter())

/*
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 

Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
*/

// let map=(arr,fn)=>{
//     let newArray=[];
//     arr.forEach((element,index) => {
//         newArray.push(fn(element,index))
//     });
//     return newArray;
// };

// const arr1=[1,1,1];
// const plusone=(n)=> n+1;
// console.log(map(arr1,plusone))

// const arr2=[1,2,3];
// const plusI=(n,i)=>n+i;
// console.log(map(arr1,plusI))

// const arr3=[1,2,3];
// const constant=()=>42;
// console.log(map(arr1,constant))

//------------------------------------------------------------------------------------------
// let filter=(arr,fn)=>{
// return arr.filter(fn)
// }

// const arr1=[0,10,20,30];
// const greaterThan10=(n)=> n>10
// console.log(filter(arr1,greaterThan10));

// const arr2=[1,2,3];
// const firstIndex=(n, i)=> i===0;
// console.log(filter(arr2,firstIndex));

// const arr3=[-2,-1,0,1,2];
// const plusOne=(n)=> n+1;
// console.log(filter(arr3,plusOne));

//------------------------------------------------------------------------------------------
/*
Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
Example 3:

Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.
*/

// let arr1 = [1, 2, 3, 4];
// let sum=arr1.reduce((accum,curr)=>{
//     return accum+curr
// },0)
// console.log(sum)

// init=100;
// let sum2=arr1.reduce((accum,curr)=>{
//     return accum+curr*curr
// },init)
// console.log(sum2)

// let arr2=[]
// init=25
// sum3=arr2.reduce((accum,curr)=>{
//     return 0;
// },init)
// console.log(sum3)

// let reduce=(nums,fn,init)=>{
//     let accum=init;

//     nums.forEach((curr) => {
//         accum=fn(accum,curr)
//     });
//     return accum;
// }

// let arr = [1, 2, 3, 4];
// let sum=(accum,curr)=>accum+curr;
// console.log(reduce(arr,sum,0))

// let arr1 = [1, 2, 3, 4];
// let sum1=(accum,curr)=>accum+curr*curr;
// console.log(reduce(arr1,sum,0))

// let arr2 = [];
// let sum2=(accum,curr)=>0;
// console.log(reduce(arr2,sum,0))

//------------------------------------------------------------------------------------------

/*
Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
*/

// let compose=(functions)=>(x)=>{
//     return functions.reduceRight((accum, fn) =>fn(accum),x)
   
// }

// let functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// console.log(compose(functions)(x))

// let compose1=(functions)=>(x)=>{
//     let result=x;
//     for(let i=functions.length-1;i>=0;i--){
//         result= functions[i](result)
//     }
//     return result;
// }
// console.log(compose1(functions)(4));

//------------------------------------------------------------------------------------------
/*
Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
Example 2:

Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.

*/

// let argumentsLength = function(...args) {
//     return args.length
// };

// argumentsLength1=function(a,b,c){
//     console.log(argumentsLength1.length)
//     console.log(arguments.length)
// }

// console.log(argumentsLength(1,2,3,4))
// argumentsLength1(1,2)
// console.log(argumentsLength1.length)


/*
Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
*/

// let once=(fn)=>{
//     let called=false;
//     let result
//     return (...args)=>{
//         if(!called){
//             called=true;
//             result=fn(...args)
//         }
//         return result
//     }
// }


// var once = function(fn) {
    
//     return function(...args){
//         for(let i=0;i<args.length;i++){
//             return fn(args[i])
//         }
//     }
// };


// let calls = [[1,2,3],[2,3,6]]
// const onceFn=(n)=>n.reduce((a,b)=> a+b, 0)
// let runOnce=once(onceFn)
// console.log(runOnce(...calls)) 

// let calls1 = [[5,7,4],[2,3,6],[4,6,8]]
// const mulFn=(n)=>n.reduce((a,b)=> a*b, 1)
// console.log(once(mulFn)(calls1)) 


let once = function(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return { calls: 1, value: result };
        }
        return undefined;
    };
};

let fn1 = (a, b, c) => a + b + c;
let calls1 = [[1, 2, 3], [2, 3, 6]];

const onceFn1 = once(fn1);
console.log(calls1.map(args => onceFn1(...args))); 

let fn2 = (a, b, c) => a * b * c;
let calls2 = [[5, 7, 4], [2, 3, 6], [4, 6, 8]];

const onceFn2 = once(fn2);
console.log(calls2.map(args => onceFn2(...args)));

// var marks=Array(6)
// marks[0]=10
// marks[1]=20
// marks[2]=30
// marks[3]=40
// marks[4]=50
// marks[5]=60


// var marks=new Array(20,40,35,12,37,100)

var marks=[20,40,35,12,37,101]
// marks.push(1000)
// marks.pop()
// console.log(marks.lastIndexOf(101))
// marks.unshift(1)
subMark=marks.slice(1,4)
console.log(subMark)
for(let i=0;i<subMark.length;i++){
   let total= subMark.reduce((v,mark)=> v+mark,0)
    console.log(total)
    let val=subMark.filter(mark=> mark%2==0)
    let changedVal=subMark.map(mark=> mark*2)
    console.log(changedVal)
    let dd=changedVal.reduce((t,ch)=>t+ch,0)
    console.log(dd)
    break
}

for(let i=0;i<subMark.length;i++){
    let total= subMark.filter(mark=> mark%2==0).map(mark=> mark*2).reduce((sum,mark)=> sum+mark,0)
    console.log(total)
    break
    
 }
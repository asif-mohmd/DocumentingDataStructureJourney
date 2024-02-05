const arr = [3,5,7,1]

const output = arr.reduce((acc,curr)=>{
  return acc += curr
},2)

console.log(output)
function sum (a=5,b=10){
return a+ b
}
console.log(sum(50,100))


// const arr = [10,20,3,20,60,9]

// function double(x){
//     return x % 2 === 0
// }

// const output = arr.filter(double)

// console.log(output)

const arr = [{
    name:"asif",
    age:20
},{
    name:"jack",
    age:40
}]

const output = arr.filter((e)=>{
    return e.age>30
})

console.log(output)
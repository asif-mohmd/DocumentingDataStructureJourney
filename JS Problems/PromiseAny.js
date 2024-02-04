const P1 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("P1 settle success"),3000)
})

const P2 = new Promise((resolve,reject)=>{
    // setTimeout(()=> resolve("P2 settle success"),1000)
    setTimeout(()=> reject("P2 settle success"),1000)

})

const P3 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("P3 settle success"),2000)
})



Promise.any([P1,P2,P3]).then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.error(err)
    console.error(err.errors) // to get aggreagate error if we reject all promises
})
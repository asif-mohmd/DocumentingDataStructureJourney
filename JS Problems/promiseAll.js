const P1 = new Promise((resolve,reject)=>{
    setTimeout(()=>  resolve("P1 success"),3000)
}
)

const P2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>  resolve("P2 success"),1000)
    setTimeout(()=>  reject("P2 Reject"),1000)
}
)

const P3 = new Promise((resolve,reject)=>{
    setTimeout(()=>  resolve("P3 success"),2000)
}
)

Promise.all([P1,P2,P3]).then((response)=>{
    console.log(response)
}).catch((err)=>{
    console.error(err)
})
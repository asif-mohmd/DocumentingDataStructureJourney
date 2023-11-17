

let arr = [ 2,3,4,5,6,7]

let data = arr.map((e)=>{
    if(e<2){
        return false
    }
   
    for(let i=2;i<e;i++){
        if(e%i===0){
            return false
        }
   
    }
    return true

})

console.log(data)
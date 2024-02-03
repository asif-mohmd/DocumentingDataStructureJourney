
console.log("1")
function mainFunction(callback){
    console.log("4")

    setTimeout(()=>{
        callback("Call back process completed")
    },1000)
    console.log("5")

}

console.log("2")

function callBackFuntion(result){
    console.log("Result:"+result)
}
console.log("3")

mainFunction(callBackFuntion)
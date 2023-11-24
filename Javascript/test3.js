

function rec(n){

    if(n===0){
        return 1
    }
    return n * rec(n-1)
}

console.log(rec(5))

function factorial(n){
    let result = 1
    for (i=2;i<=n;i++){
        result = result * i
    }
    return result
}

console.log(factorial(5))
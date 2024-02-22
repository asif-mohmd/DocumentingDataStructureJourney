

let n = 1

function main(n){
    odd(n)
}

function odd(n){
    if(n<=10){
        console.log(n+1)
        n++
        even(n)
    }
    return
}

function even(n){
    if(n<=10){
        console.log(n-1)
        n++
        odd(n)
    }
    return
}

main(n)
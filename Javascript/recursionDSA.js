let sum = 1;

function isFactorial(n) {
    if (n <= 1) {
        return sum;
    }

    sum = sum * n;
    return isFactorial(n - 1);
}

console.log(isFactorial(2));


function recursiveFactorial(n){
    if(n===0){
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(5))
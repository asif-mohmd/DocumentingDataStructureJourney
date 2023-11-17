
function recursionTest(n){
    if(n<=1){
        return 1
    }
    
    return n * recursionTest(n-1)

}



console.log(recursionTest(5))
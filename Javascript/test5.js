



function searchLinear(n){

    let arr = [5,3,7,1,2,9]
    for(let i=0;i<arr.length -1 ; i++){
        if(n==arr[i]){
            return i
        }
    }
    return -1

}






console.log(searchLinear(1))
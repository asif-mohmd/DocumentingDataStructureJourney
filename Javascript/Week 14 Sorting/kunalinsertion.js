

function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }else{
                break;
            }
        }
    }
    return arr



}

let arr = [4,3,7,-5,8,-3,-4,5,-2,2,1]

console.log(insertionSort(arr))
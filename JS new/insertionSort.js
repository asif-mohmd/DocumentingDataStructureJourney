



function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
       for(let j=i;j>0;j--){
        if(arr[j]<arr[j-1]){
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
        }else{
            break
        }
       }
    }
    return arr
}


let arr = [4,6,3,7,2,9,1,5]
console.log(insertionSort(arr))
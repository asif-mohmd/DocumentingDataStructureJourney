

function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j-1]>arr[j]){
                [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
            }
        }
    }

    return arr

}


console.log(insertionSort([1,4,2,8,345,123,43,32,543,65,123,43,2]))
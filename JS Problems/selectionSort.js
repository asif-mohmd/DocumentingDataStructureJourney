


function selectionSort(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(selectionSort([1,4,2,8,345,123,43,32,543,65,123,43,2]))
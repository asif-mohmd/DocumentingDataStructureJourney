


function insertionSort(arr){

    for(i=1;i<arr.length;i++){
        let numInsert = arr[i]
        let  j = i-1
        while(j>=0 && arr[j] > numInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numInsert

    }

    return arr
}






console.log(insertionSort([1,4,2,8,345,123,43,32,543,65,123,43,2]))
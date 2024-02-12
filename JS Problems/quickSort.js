


function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let left = []
    let right = []
    let pivot = arr[arr.length-1]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}





console.log(quickSort([1,4,2,8,345,123,43,32,543,65,123,43,2]))
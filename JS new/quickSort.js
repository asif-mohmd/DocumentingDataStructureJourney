let arr = [4,6,3,7,2,9,1,5]

function quickSort(arr){
    if(arr.length <2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let leftArr = [] 
    let rightArr = []

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }



   return ([...quickSort(leftArr),pivot,...quickSort(rightArr)])


}





console.log(quickSort(arr))
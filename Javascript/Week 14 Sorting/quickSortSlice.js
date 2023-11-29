

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let leftArr = []
    let rightArr = []

    let pivot = arr[arr.length-1]

    for(const el of arr.slice(0,arr.length-1)){
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }


    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]



}

let arr = [1,4,2,8,345,123,43,32,543,65,123,43,2]

console.log(quickSort(arr))
console.log(arr)
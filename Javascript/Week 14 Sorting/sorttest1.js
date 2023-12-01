


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         for(let j=i;j>0;j--){
//             if(arr[j]<arr[j-1]){
//                 [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
//             }else{
//                 break
//             }
//         }
//     }
//     return arr
// }
// let arr = [5,3,-4,-6,1,7]
// console.log(insertionSort(arr))


// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }


// function merge(leftArr,rightArr){
//     let sortedArray = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<rightArr[0]){
//             sortedArray.push(leftArr.shift())
//         }else{
//             sortedArray.push(rightArr.shift())
//         }
//     }
//     return [...sortedArray,...leftArr,...rightArr]
// }

// let arr = [5,3,-4,-6,1,7]

// console.log(mergeSort(arr))

function quickSort(arr){
    if(arr.length<2){
        return arr
    }

    let leftArr = []
    let rightArr = []

    let pivot = arr[arr.length-1]

    for(i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]


}

let arr = [5,3,-4,-6,1,7]

console.log(quickSort(arr))
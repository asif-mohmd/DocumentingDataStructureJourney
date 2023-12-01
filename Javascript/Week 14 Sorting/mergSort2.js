

function mergeSort(arr){

    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))



}


function merge(leftArr,rightArr){

    let sortedArray = []

    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArray.push(leftArr.shift())
        }else{
            sortedArray.push(rightArr.shift())

        }

      

    }
    return [...sortedArray,...leftArr,...rightArr]

}

const arr = [8,20,-2,4,-6]

console.log(mergeSort(arr))
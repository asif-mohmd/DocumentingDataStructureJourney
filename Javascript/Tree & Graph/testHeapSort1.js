

function heapSort(array){
    for(let i=Math.floor(array.length/2);i>=0;i--){
        heapify(array,i,array.length)
    }
    for(i=array.length-1; i>=0;i--){
        [array[0],array[i]]=[array[i],array[0]]
        heapify(array,0,i)
    }
    return array
}

function heapify(array,i,length){
    let largest = i
    let left = 2*i +1
    let right = 2*i +2

    if(left<length && array[left] > array[largest]){
        largest = left
    }
    if(right<length && array[right] > array[largest]){
        largest = right
    }
    if(largest !== i){
        [array[i],array[largest]] = [array[largest],array[i]]
        heapify(array,largest,length)
    }


}



let array = [3,5,1,8,2,4]
let newSort = heapSort(array)
console.log(newSort)

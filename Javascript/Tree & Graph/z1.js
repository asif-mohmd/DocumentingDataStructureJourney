function heapSort(array){
    for(let i=Math.floor(array.length/2)-1;i>=0;i--){
        heapify(array,i,array.length)
    }

    for(let i=array.length-1;i>=0;i--){
        [array[0],array[i]] = [array[i],array[0]]
        heapify(array,0,i)
    }



    return array
}

function heapify(array, i, length) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < length && array[left] < array[smallest]) {
        smallest = left;
    }
    if (right < length && array[right] < array[smallest]) {
        smallest = right;
    }
    if (smallest !== i) {
        [array[i], array[smallest]] = [array[smallest], array[i]];
        heapify(array, smallest, length);
    }
}



let array = [8,4,7,2,3,9,6,1,5]

console.log(heapSort(array))
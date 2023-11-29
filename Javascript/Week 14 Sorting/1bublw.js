


function bubbleSort(arr){

    if(arr.length <= 1){
        return arr
    }

    for(let i=0 ;i<arr.length -1 ;i++){
        for(let j=0; j<arr.length -1 -i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }

    return arr

}


console.log(bubbleSort([1,4,2,8,345,123,43,32,543,65,123,43,2]))
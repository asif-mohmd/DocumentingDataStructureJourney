

function bubbleSort(arr){


    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr.length - i ; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }

    return arr

}


const arr = [8,20,-2,4,-6]

console.log(bubbleSort(arr))
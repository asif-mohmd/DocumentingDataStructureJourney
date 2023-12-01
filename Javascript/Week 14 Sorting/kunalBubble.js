


function bubbleSort(arr){


    for(let i=0;i<arr.length; i++){
        for(let j=1;j<arr.length - i; j++){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }

    return arr

    
}

let arr = [3,2,-5,3,-8,9,-2,3,4,1]

console.log(bubbleSort(arr))
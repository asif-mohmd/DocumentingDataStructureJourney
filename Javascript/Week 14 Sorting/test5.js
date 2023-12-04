

function selectionSort(arr){

    for(let i=0;i<arr.length -1;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[i]){
               let temp = arr[i]
               arr[i] = arr[j]
               arr[j] = temp
            }
        }
    }

    return arr

}

const arr = [8,20,-2,4,-6]

console.log(selectionSort(arr))
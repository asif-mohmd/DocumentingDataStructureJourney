

function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }else{
                break;
            }
        }
    }

    return arr

}




const arr = [8,20,-2,4,-6]

console.log(insertionSort(arr))
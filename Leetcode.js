

let arr = [[1,2,3,4],[2,7,5,6],[5,9],[6,7,9,8]]

 for(let i=0;i<arr.length;i++){
    let innerArray = arr[i]
    for(let j=0;j<innerArray.length;j++){
        [innerArray[j],innerArray[j+1]] = [innerArray[j+1],innerArray[j]]
    }
 }

 console.log(arr)
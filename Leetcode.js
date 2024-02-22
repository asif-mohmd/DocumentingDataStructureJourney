

let arr = [[1,2,3,4],[2,7,5,6],[5,9],[6,7,9,8]]

 for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j+=2){
        [arr[i][j],arr[i][j+1]] = [arr[i][j+1],arr[i][j]]

    }
 }

 console.log(arr)
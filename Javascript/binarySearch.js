

function binarySearch(arr, n) {

    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex = rightIndex) / 2)
    }



    let newArr = arr.sort()
    for (i = 0; i < newArr.length; i++) {
        if (newArr[i] === n) {
            return i
        }
    }

    return -1

}

console.log(binarySearch([3, 2, 5, 4, 8, 6], 5))
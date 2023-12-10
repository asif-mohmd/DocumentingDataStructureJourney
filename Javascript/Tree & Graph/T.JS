function heapify(array, i, length) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, largest, length);
    }
}

function heapsort(array) {
    // Build max heap
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, array.length);
    }

    console.log(array,";;;;;;;;;;;;;;;;")

    // Perform heapsort
    for (let i = array.length - 1; i >= 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        let j = 0;
        let done = false;

        while (!done) {
            let largest = j;
            let left = 2 * j + 1;
            let right = 2 * j + 2;

            if (left < i && array[left] > array[largest]) {
                largest = left;
            }

            if (right < i && array[right] > array[largest]) {
                largest = right;
            }

            if (largest !== j) {
                [array[j], array[largest]] = [array[largest], array[j]];
                j = largest;
            } else {
                done = true;
            }
        }
    }

    return array;
}

let array = [5, 1, 3, 4, 8, 6];
console.log(heapsort(array));

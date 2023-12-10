function createHeapTree(array) 
{
    // Build a max heap tree
  
    // Start from the last non-leaf node and heapify each node
    // in a bottom-up manner
    for (let i = Math.floor(array.length / 2); i >= 0; i--) 
    {
      heapify(array, i, array.length);
    }
  
    return array;
}
  
  function heapify(array, index, heapSize) 
  {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;
  
    // Check if the left child is larger than the current largest node
    if (left < heapSize && array[left] > array[largest]) 
    {
      largest = left;
    }
  
    // Check if the right child is larger than the current largest node
    if (right < heapSize && array[right] > array[largest]) 
    {
      largest = right;
    }
  
    // If the largest node is not the current node, swap them and recursively
    // heapify the affected child subtree
    if (largest !== index) 
    {
      swap(array, index, largest);
      heapify(array, largest, heapSize);
    }
  }
  
  function swap(array, i, j) 
  {
    // Swaps the elements at indices i and j in the array
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    console.log(array,"===============")
  }
  
  // Example usage
  const arr = [4, 10, 3, 5, 1];
  console.log("Array before heapify:" ,arr)
  const maxheap = createHeapTree(arr);
  console.log("Array after heapify:")
  console.log(maxheap);
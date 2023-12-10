    // Heap Sort algorithm
    function heapSort(array) 
    {
    
      // Build a max heap
      for (let i = Math.floor(array.length / 2) ; i >= 0; i--) 
      {
        heapify(array,  i, array.length);
      }
    
      // Extract elements from the heap one by one
      for (let k = array.length - 1; k >= 0; k--) 
      {
        swap(array, k, 0); // Move the current root (maximum) to the end
        heapify(array, 0, k); // Heapify the reduced heap
      }
    
      return array;
    }
   
   
   // Heapify function to maintain the heap property
    function heapify(arr, index,heapsize) 
    {
      let largest = index; // Assume the current node is the largest
      const left = 2 * index + 1; // Index of the left child
      const right = 2 * index + 2; // Index of the right child
    
      // Check if the left child is larger than the current node
      if (left < heapsize && arr[left] > arr[largest]) 
      {
        largest = left;
      }
    
      // Check if the right child is larger than the current node
      if (right < heapsize && arr[right] > arr[largest]) 
      {
        largest = right;
      }
    
      // If the largest element is not the current node, swap them
      if (largest !== index) 
      {
        swap(arr, index, largest);
    
        // Recursively heapify the affected subtree
        heapify(arr, largest,heapsize);
      }
    }
  
  
    // Helper function to swap elements in an array
  function swap(arr, i, j) 
  {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
    
   
    
    // Example usage
    const arr = [7, 3, 9, 2, 4, 1, 5, 8, 6];
    // const arr = [ 3, 9, 2, 4, 1];
    console.log("Original Array:", arr);
    console.log("Sorted Array:", heapSort(arr));
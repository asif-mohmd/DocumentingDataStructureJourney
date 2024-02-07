function countVowels(array) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    // Iterate over each string in the array
    array.forEach(str => {
        // Convert the string to lowercase to make the comparison case-insensitive
        const lowerStr = str.toLowerCase();
        
        // Iterate over each character in the string
        for (let char of lowerStr) {
            // Check if the character is a vowel
            if (vowels.includes(char)) {
                // If it is, increment the count
                count++;
            }
        }
    });
    
    return count;
}

const array = ["Hello", "World", "JavaScript"];
const vowelCount = countVowels(array);
console.log("Total vowels in array:", vowelCount);

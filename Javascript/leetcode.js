
var reversePrefix = function(word, ch) {
    // Loop through each character in the word
    for (let i = 0; i < word.length; i++) {
        // Check if the current character is equal to the specified character (ch)
        if (word[i] === ch) {
            console.log(i,"stage: 1")
            // Use substring to extract the prefix to be reversed
            let prefix = word.substring(0, i + 1);
            console.log(prefix,"stage : prefix")
            
            let reversedPrefix1 = prefix.split('')
            console.log(reversedPrefix1,"stage : split")

            let t2 = reversedPrefix1.reverse()
            console.log(t2,"t2 : reverse")

            let t3 = t2.join('');
            console.log(t3,"t3 : join")
        }
    }
    
    // If the character is not found, return the original word
    // return word;
};

// Test cases
console.log("------------------------------------------------------------------------------------------------------------")

console.log(reversePrefix("abcdefd", "d")); // Output: "dcbaefd"
console.log("------------------------------------------------------------------------------------------------------------")
console.log(reversePrefix("xyxzxe", "z")); // Output: "zxyxxe"
console.log("------------------------------------------------------------------------------------------------------------")

console.log(reversePrefix("abcd", "z"));    // Output: "abcd"

function palindrome(str) {
    // Convert the string to lowercase to ignore case sensitivity
    str = str.toLowerCase();
    // Define pointers for the start and end of the string
    let start = 0;
    let end = str.length - 1;
    // Iterate until the pointers meet
    while (start < end) {
        // If characters at both pointers are not equal, it's not a palindrome
        if (str[start] !== str[end]) {
            return false;
        }
        // Move the pointers towards the center
        start++;
        end--;
    }
    // If the loop completes, the string is a palindrome
    return true;
}

let out = palindrome("malayalam");
console.log(out); // Output will be true as "malayalam" is a palindrome

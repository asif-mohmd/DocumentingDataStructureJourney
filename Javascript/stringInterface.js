function convertToUpperCase(s) {
    let output = "";

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {
            output += String.fromCharCode(charCode - 32);
        } else {
            output += s[i];
        }
    }

    return output;
}

let s = "hai";
let result = convertToUpperCase(s);
console.log(result);

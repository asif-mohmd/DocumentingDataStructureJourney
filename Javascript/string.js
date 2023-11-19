
const readline = require('readline');

function alpha() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter String: ', function (a) {
        rl.close();
        var output = "";
        for (var x = 0; x < a.length; x++) {
            output += String.fromCharCode(a.charCodeAt(x) > 96 && a.charCodeAt(x) < 123 ? a.charCodeAt(x) - 32 : a.charCodeAt(x));
        }
        console.log("--" + output);
    });
}

alpha();




// function alpha() {
//     var a = prompt("Enter String: ");
//     var output = "";
//     for (var x = 0; x < a.length; x++) {
//         output += String.fromCharCode(a.charCodeAt(x) > 96 && a.charCodeAt(x) < 123 ? a.charCodeAt(x) - 32 : a.charCodeAt(x));
//     }
//     return output;
// }

// // Check if running in a browser environment before calling prompt
// if (typeof window !== 'undefined') {
//     console.log("--" + alpha());
// }



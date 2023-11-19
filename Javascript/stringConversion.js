const readline = require("readline")

function alpha(){
    const r1 = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    })

    r1.question("enter string:", function(a){
        r1.close()
        output = ""
        for(var i=0;i<a.length;i++){
            output += String.fromCharCode(a.charCodeAt(i) > 96 && a.charCodeAt(i) < 123 ? a.charCodeAt(i) - 32 : a.charCodeAt(x))
        }

        console.log(output,"[[[")
    })


}

alpha()
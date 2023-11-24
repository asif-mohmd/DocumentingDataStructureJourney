
function convertToString(s){
    let output = ""

    for(i=0;i<s.length;i++){
        let c = s.charCodeAt(i)

        if(c>= 97 && c <=122){
            output += String.fromCharCode(c -32)
        }else{
            output += s[i]
        }
    }
    return output
}





s = "hai"

const result = convertToString(s)
console.log(result)
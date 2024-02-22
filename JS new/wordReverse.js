function wordReverse(str){
    let newStr = ""
    let tempStr = ""
    for(let i=0;i<str.length;i++){
        if(str[i]!=" "){
            tempStr += str[i]
        }else{
            newStr = tempStr + " " +newStr
            tempStr = ""
        }
    }
 return tempStr + " " +newStr
}



let str = "muhammed asif ps"
console.log(wordReverse(str))
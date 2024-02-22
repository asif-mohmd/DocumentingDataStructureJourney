


function anagram(s1,s2){
    for(let i=0;i<s1.length;i++){
        if(s2.includes(s1[i])){
            continue;
        }else{
            return false
       }
    }
    return true
}


let s1 = "abcd"
let s2 = "cbhd"

console.log(anagram(s1,s2))
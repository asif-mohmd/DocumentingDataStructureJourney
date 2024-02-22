

function stringCount(str){
    let res = {}

    for(const char of str){
        if(res[char]){
            res[char] += 1
        }else{
            res[char] = 1
        }
    }
    return res
}





let str = "muhammedmuhammed"
console.log(stringCount(str))
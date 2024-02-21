


function checkPalindrome(str){

    let left = 0
    let right = str.length-1
    
    while(left<right){
        if(str[left]===str[right]){
            left++
            right--
        }else{
            return false
        }

    }
    return true

}


console.log(checkPalindrome("malayalam"))
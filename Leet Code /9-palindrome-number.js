/*
Determine whether an integer is a palindrome.
 An integer is a palindrome when it reads the same backward as forward.
*/

// Solution 
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x - reverseNum(x) === 0){
        return true;
    }
    return false
};

var reverseNum = (number) =>{
    var reverse = 0;
    while(number > 0){
        reverse = reverse*10 + number%10;
        number = Math.floor(number/10);
    }
    return reverse
};
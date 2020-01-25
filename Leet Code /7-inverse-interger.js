/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store 
integers within the 32-bit signed integer range:
 [−2^31,  2^31 − 1]. 
 For the purpose of this problem, 
 assume that your function returns 0 when the reversed integer overflows.
/*


// Solution 1: Split and Inverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var negative;
    if( x < 0){
        negative = true;
        x = -1 * x;
    }
    
    var temp;
    var inverse = 0;
    while( x > 0){
        var temp = x % 10;
        inverse = inverse*10 + temp;
        x = Math.floor(x/10)
    }
    
    return inverse > Math.pow(2,31) - 1 ? 0 : negative ? inverse* -1 : inverse;
};

// Solution 2: Convert to string and reverse
var reverse = function(x) {
    var inverse = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    return inverse > Math.pow(2,31) - 1 ? 0 : x < 0 ? inverse* -1 : inverse;
};
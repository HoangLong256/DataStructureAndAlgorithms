/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s === null || s.length < 1){
        return ""
    }
    var start = 0;
    var end = 0;
    var maxLen = 0;
    for( let i = 0; i < s.length; i++){
        var one_letter_center = aroundCenter(s, i , i);
        var two_letter_center = aroundCenter(s, i, i+1);
        let len = Math.max(one_letter_center,two_letter_center)
        if(maxLen <  len && len > end - start ){
            maxLen = len
            start = i - Math.floor((len-1)/2)
            end = i + Math.round((len+1)/2)
        }
    }
    return s.substring(start,end)


};
    
var aroundCenter = (s, left_center , right_center)=>{
    while(left_center >= 0 && right_center < s.length){
        if(s.charAt(left_center) === s.charAt(right_center)){
            left_center--;
            right_center++;
        }else{
            break
        }
    }
    return right_center - left_center - 1
}
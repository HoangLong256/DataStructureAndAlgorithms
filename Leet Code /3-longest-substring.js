/*
Given a string, find the length of the longest substring
without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
*/

// Solution 1 (Complexity O(N^3))
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var longestSub = 0
    for (let i = 0; i < len; i++){
        let lArray = [];
        let temp = 1;
        lArray.push(s.charAt(i));
        
        for(let j = i + 1; j < len; j++){
            if(lArray.includes(s.charAt(j))){
                break;
            }
            lArray.push(s.charAt(j));
            temp++;
        }
        
        if(temp > longestSub){
            longestSub = temp;
        }
        
    }
    return longestSub;
};

// Solution 2 (Sliding Window [i,j-1) Method)
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var longestSub = 0;
    var lArray = []
    var i = 0;
    var j = 0;
    while( i < len && j < len){
        if(!lArray.includes(s.charAt(j))){
            lArray.push(s.charAt(j++))
            longestSub = longestSub < (j - i) ? (j - i) : longestSub 
        }else{
            lArray.shift()
            i++
        }
    }
    console.log(longestSub)
    return longestSub;
};

// Solution 2 Optimized 

var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var longestSub = 0;
    var lArray = []
    var i = 0;
    var j = 0;
    while( i < len && j < len){
        if(!lArray.includes(s.charAt(j))){
            lArray.push(s.charAt(j++))
            longestSub = longestSub < (j - i) ? (j - i) : longestSub 
        }else{
            let index = lArray.findIndex((ele) => ele === s.charAt(j))
            lArray.splice(0,index + 1)
            i += index + 1
        }
    }
    return longestSub;
};
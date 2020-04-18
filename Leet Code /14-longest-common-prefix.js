/*
--Question--
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

--Example--
Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

--Note--
All given inputs are in lowercase letters a-z.

--Time Complexity--
0(n^2)
*/

// SOLUTION

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //Return null if empty string
    if(strs.length === 0) return '';
    var commonPre = strs[0];
    
    //Scan one by one letters
    for(let i = 0; i < strs.length; i++){
        for(let j = 0; j < commonPre.length; j++){
            
            //Break if not the same and save the common prefix
            if(strs[i].charAt(j) !== commonPre.charAt(j)){
                commonPre = commonPre.slice(0,j);
                break;
            }
        }
    }

    return commonPre;
};
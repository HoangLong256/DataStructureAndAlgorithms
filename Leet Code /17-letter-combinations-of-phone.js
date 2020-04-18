/*
--Question-- 
Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons)
is given below. Note that 1 does not map to any letters.

--Example--
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

--Approach--
Backtracking is an algorithm for finding all solutions by exploring all potential candidates.
If the solution candidate turns to be not a solution (or at least not the last one), 
backtracking algorithm discards it by making some changes on the previous step, i.e. backtracks and then try again.

Here is a backtrack function backtrack(combination, next_digits) which takes as arguments an ongoing letter combination and the next digits to check.
+ If there is no more digits to check that means that the current combination is done.
+ If there are still digits to check :
    Iterate over the letters mapping the next available digit.
        Append the current letter to the current combination combination = combination + letter.
        Proceed to check next digits : backtrack(combination + letter, next_digits[1:]).

--Time Complexity--
O(3^n X 4^m) 
n: nums of digits of 3 letters digit 
m: nums of digits of 4 letters digit

--Space Complexity--
O(3^n X 4^m) 
*/


// SOLUTION:
/**
 * @param {string} digits
 * @return {string[]}
 */


//BASIC EXAMPLE OF RECURSION
/*const recursionDigits = (digits, index, array) => {
    if(index > digits.length - 1 ){
        console.log('Ngung tai day: '+ index)
        return array;
    }
    console.log('Thuc hien recur: ' + index)
    return recursionDigits(digits, index+1, [...array,digits[index]])
    console.log(recursionDigits('2345', 0, []))
}*/

//Generate map (Option: Can you map value)
const key = [2, 3, 4, 5, 6, 7, 8, 9];
const letter = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
var object = {};

// Invoked Imediately Function Expression
// Store key and value
(function IIFE() {
    for (let i = 0; i < key.length; i++) {
        object[key[i]] = letter[i].split('');
    }
})();


var letterCombinations = function (digits) {
    //Check Null Digits
    if (digits === null || digits.length === 0) return [];

    var result = [];
    //RECURSION: backTracking Method
    const backTracking = (combination, number, index = 0) => {
        if (index > number.length - 1) {
            result.push(combination);
            return;
        }
        //Get array of digit letters
        let digitsLetters = object[number[index]]
        //RECURSION on every elements
        for (let i = 0; i < digitsLetters.length; i++) {
            backTracking(combination + digitsLetters[i], number, index + 1)
        }
    }
    backTracking('', digits)
    return result
};


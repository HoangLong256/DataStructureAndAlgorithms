/*
--QUESTION--
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

--NOTE--
The solution set must not contain duplicate triplets.

--EXAMPLE--
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

--TIME COMPLEXITY--
O(n^2)
*/

// SOLUTION
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var target = 0;
    var result = [];

    //Sort the array , take O(nlogn)
    nums = nums.sort((a, b) => a - b);

    //Let consider 3 values, i, left(value next to i), k(value at the end of array);
    //Cause need 3 numbers for result => nums.length - 2
    for (let i = 0; i < nums.length - 2; i++) {

        //Because the array is already sort, so return null if the smallest value > target value
        if (nums[i] > target) {
            return result;
        }
        let left = i + 1;
        //Skip duplicate value
        if (nums[i] === nums[i - 1] & i > 0) {
            continue;
        }

        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                //Remove duplicate left value
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                //Remove duplicate right value
                while (nums[right] === nums[right - 1]) {
                    right--
                }

                left++;
                right--;

            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};
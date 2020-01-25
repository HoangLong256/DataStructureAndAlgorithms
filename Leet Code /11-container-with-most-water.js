// Solution 1: Brutal Force O(n^2)
var maxArea = function(height) {
    var mostWater = 0;
    var area;
    for(let i = 0; i < height.length; i++){
        for(let j = i + 1; j < height.length ; j++){
            area = Math.min(height[i], height[j]) * (j - i)
            mostWater = Math.max(area, mostWater)
        }
    }
    return mostWater
    
};

// Soultion 2: Two Pointer Approach O(n)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var mostWater = 0;
    var left = 0;
    var right = height.length - 1;
    while ( left < right){
        mostWater = Math.max(mostWater, Math.min(height[left],height[right]) * (right - left))
        if(height[left] > height[right]){
            right--;
        }else{
            left++
        }
    }
    return mostWater
    
};
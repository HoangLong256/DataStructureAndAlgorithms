// Intersection Sort: Build one final sorted array at a time
// Best: O(N) = n
// Avg: O(N) = n^2
// Worst: O(N) = n^2

lArray = [3, 1, 7, 4, 9, 11, 8, 2]
const intersection = function(lArray){
    var key = 1;
    for( let i = 1; i < lArray.length; i++){
        var j = 0;
        while(lArray[key - j ] < lArray[key - j - 1] && key - j > 0){
            var temp = lArray[key - j]
            lArray[key - j] = lArray[key - j - 1]
            lArray[key - j - 1] = temp;
            j = j + 1;
        }
        key = key + 1;

    }
    console.log(lArray);
}
intersection(lArray);
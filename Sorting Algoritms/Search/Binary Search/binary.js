// Binary Search: Search a sorted array by repeatedly dividing the search interval in half.
// Complexity: 
// Best: O(1)
// The others: O(log n)

const lArray =  [1,3,5,7,8,9];
const binary = (lArray, number) => {
    var low = 0;
    var high = lArray.length ;
    var flag = true;
    var i = 0;
    while(i < 5){
        var test = Math.round((low + high + 1)/2  - 1);
        if(lArray[test] === number){
            console.log("Found number: " + lArray[test]);
            console.log("Index: " + test);
            flag = false;
            return test;
        }else if(lArray[test] > number){
            high = test;
        }else{
            low = test
        } 
        i++;
    }
    
}

binary(lArray, 8)
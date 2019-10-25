// Binary Search: Search a sorted array by repeatedly dividing the search interval in half.
// Complexity: 
// Best: O(1)
// The others: O(log n)

const lArray =  [1,3,5,7,8,9];
const binary = (lArray, number) => {
    var low = 0;
    var high = lArray.length - 1 ;
    var flag = true;
    var i = 0;
    while(i < 4){
        var test = (low + high)/ 2;
        test = Math.round(test);
        if(lArray[test] === number){
            console.log("Found number: " + lArray[test]);
            console.log("Index: " + test);
            flag = false;
            return test;
        }else if(lArray[test] > number){
            high = test - 1;
        }else{
            low = test;
        } 
        i++;
    }
    
}

binary(lArray, 9)
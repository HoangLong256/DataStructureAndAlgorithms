// Merge Function
// Complexity: n * log(n)
lArray1 = [3, 27, 38, 43];
lArray2 = [9, 10, 82];
lArray = [38,27,43,3,9,82,10];
const merge = function(lArray1, lArray2){
    var len1 = lArray1.length;
    var len2 = lArray2.length;
    var len = len1 + len2;
    var result = []
    var m = 0;
    var n = 0;
    for( let i = 0; i < len; i++){
        if(m < len1 && n < len2){
            if(lArray1[m] > lArray2[n] ){
                result.push(lArray2[n]);
                n = n + 1;
            }else{
                result.push(lArray1[m]);
                m = m + 1
            }
        }else if(m === len1){
            while(n < len2){
                result.push(lArray2[n])
                n++;
            }
        }else if(n === len2){
            while(m < len1){
                result.push(lArray1[m])
                m++;
            }
        }
        
    }
    //console.log(result);
    return result;
}

// Using Recursion 
const sort = function(lArray){
    if(lArray.length < 2){
        return lArray;
    }
    var left = lArray.splice(0, lArray.length/2)
    var right = lArray
    var sortL = sort(left)
    var sortR = sort(right)
    console.log("Sort Left " + sortL);
    console.log("Sort Right " + sortR);
    console.log("")
    merge(sort(left), sort(right))
}
//merge(lArray1, lArray2)
var avc = sort(lArray);

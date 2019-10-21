// Bubble Sort: Repeatedly swap adjecent elements if they are in wrong order. 
// O(N): n^2

// Example:
lArray = [1 ,9 ,5 ,2 , 0, 7, 6, 8];
const bubble = function(lArray){
    for( let i = 0; i < lArray.length - 1; i++){
        for(let j = 0; j < lArray.length - i - 1 ; j++){
            if(lArray[j] > lArray[j+1]){
                let temp = lArray[j];
                lArray[j] = lArray[j+1];
                lArray[j+1] = temp
            }
        }
    }
    return lArray;
}

const optimizedBubble = function(lArray){
    for( let i = 0; i < lArray.length - 1; i++){
        var flag = true;
        for(let j = 0; j < lArray.length - i - 1 ; j++){
            if(lArray[j] > lArray[j+1]){
                let temp = lArray[j];
                lArray[j] = lArray[j+1];
                lArray[j+1] = temp;
                flag = false;
            }
        }

        if(flag === true){
            break;
        }
    }
    return lArray;
}

var sortedArray = optimizedBubble(lArray);
sortedArray.forEach((element)=>{
    console.log(element)
})

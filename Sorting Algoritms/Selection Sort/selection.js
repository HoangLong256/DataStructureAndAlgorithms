const lArray = [5,2,7,4,9,8];

const swap = (a1, leftIndex, rightIndex)=>{
    var temp = a1[leftIndex];
    a1[leftIndex] = a1[rightIndex];
    a1[rightIndex] = temp;
    return a1;
}

// Basic Selection Sort
const selection = (lArray)=>{
    for(let i = 0; i < lArray.length; i++){
        var number = i;
        for(let j = i; j < lArray.length; j++ ){
            if(lArray[number] > lArray[j]){
                number = j;
            }
        }
        swap(lArray, number, i);

    }
}

selection(lArray);


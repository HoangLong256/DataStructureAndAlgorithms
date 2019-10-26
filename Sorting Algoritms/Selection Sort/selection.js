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

// selection(lArray);

// Selection Sort using recursion
const recursionSelection = (lArray, index)=>{
    if(index === lArray.length - 1){
        console.log();
        console.log(lArray);
        return lArray;
    }else{
        var initial_index = index;
        var smallest_index= index;
        for(var  i = index; i < lArray.length; i++){
            if(lArray[smallest_index] > lArray[i]){
                smallest_index = i;
            }
        }
        console.log(lArray); 
        swap(lArray, smallest_index, initial_index);
        recursionSelection(lArray, index + 1)
    }
}
recursionSelection(lArray, 0)

// Quick Sort: It picks an element as pivot and partitions the given array around the picked pivot.
// Complexity: 
// Best and Average: O( n log(n) )
// Worst Case:  O(n^2)
const lArray = [10, 80, 30, 90, 50, 40, 70 ]


const swap = (a1, leftIndex, rightIndex)=>{
    var temp = a1[leftIndex];
    a1[leftIndex] = a1[rightIndex];
    a1[rightIndex] = temp
    return a1;
}

// Right is the last elements, is also the pivot
// Left is the index of element which is smaller than pivot
const partition = (a2, left, right)=>{
    // Index of the element which is equal greater than pivot
    var index = -1;
    for(let i = 0; i < a2.length; i++){
        if(a2[i] <= a2[right]){
            index++;
            a2 = swap(a2, index, i);
        }
    }
    return index;
}

const quickSort = (a3, left, right)=>{
    var pivot; 
    if(left < right){
        pivot = partition(a3, left, right)

        quickSort(a3, left, pivot - 1)
        quickSort(a3, pivot + 1, right)
    }
    
}
// swap(lArray, 0, 1)
console.log(lArray) 
quickSort(lArray, 0, lArray.length - 1)
console.log(lArray)
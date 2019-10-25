// Linear Search : Loop through the unsorted array to find searched elements
// Complexity: O(n)

lArray = [0,4,7,2,8,5,6];
const linear = (lArray, number) =>{
    for(let i = 0; i < lArray.length; i ++){
        if( lArray[i] === number){
            console.log(i)
            return i
        }
    }
}

linear(lArray, 4)
lArray = [1,9,5,2,8,6,4]
const bubble = (lArray, num) => {
    if(num === 1){
        console.log(lArray);
        return lArray;
    }else{
        for(let i = 0; i < num - 1; i++){
            if(lArray[i] > lArray[i+1]){
                let temp = lArray[i];
                lArray[i] = lArray[i+1];
                lArray[i+1] = temp
            }
        }
        console.log(lArray)
        bubble(lArray, num - 1)
    }
}
bubble(lArray, lArray.length);
/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){
        return s
    }
    var indexList = generateIndexList(s , numRows)
    var result = "";
    for(let i = 1 ;i <= numRows; i++){
        indexList.forEach((num, index)=>{
            if(i === num)
                result  += s.charAt(index)
        })
    }
    return result;
};

var generateIndexList = (s, numRows) =>{
    var list = [];
    var direction;
    var index = 1
    for(let i = 0; i <= s.length; i++){
        list.push(index);
        if(index === 1){
            direction = 1;
        }else if(index === numRows){
            direction = -1;
        }
        index += direction;
    }
    return list;
}
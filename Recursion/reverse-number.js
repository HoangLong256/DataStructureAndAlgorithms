// Reverse number by using recurrsion
const num = 19284

const reverse = (num,rev)=>{
    if(num < 10){
        rev = rev*10 + num
        console.log(rev)
        return rev
    }
    rev = rev*10 + num%10
    num = Math.floor(num/10)
    reverse(num, rev)
}
reverse(num,0)
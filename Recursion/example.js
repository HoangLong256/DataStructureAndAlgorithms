// Printing from 0 to 10 using recursion
const printNumb = (num) => {
    if(num < 1){
        console.log(num)
        console.log("Ending....")
    }else{
        console.log(num)
        printNumb(num - 1);
    }
}

const fun = (x , y)=>{
    if( x === 0){
        console.log(x)
        return y
    }else{
        console.log(x)
        console.log(y)
        console.log(x + y)
        console.log()
        return fun(x - 1, x + y)
    }
}

const fun1 = (n)=>{
    if(n === 1){
        return 0;
    }else{
        console.log(1 + fun1(Math.round(n/2)))
        return 1 + fun1(Math.round(n/2));
    }
}
//printNumb(10);
a = fun1(8)
//console.log(a)
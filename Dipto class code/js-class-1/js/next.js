function abc(){
    console.log(abc.xyz);
}

abc();

abc.xyz=10;
abc.xyz=120;

abc();

const number=[1,2,3,4,5,6,7,8,9,10];

number[110]=500;
console.log(number);

console.log(typeof typeof 1000)

const arg=[..."anik"]
console.log(arg);


console.log(parseInt('10+2'))
console.log(parseInt('7FM'))
console.log(parseInt('F8M'))
console.log(isNaN("anik"))

console.log([1,2].map(num=>{
    if(num>0) return;
    return num *2
}))


function aaa(){
    return;
}
console.log(aaa())

"use strict"
{
    function  bb(){
        console.log("hello")
    }
}
bb();

var abc='anik';
let xyz='dipto';
console.log(window.abc,window.xyz);

function ccc(a,b){
    'use strict'
    a=100;
    b=200;
    return arguments[0]+arguments[1];
    console.log(a+b);
}

console.log(ccc(300,400))

// const arr = [1,2,3,4,5,6,7,8,9,10];
// const newArr=arr.find((num)=>num>4);
// console.log(newArr);

// const arr = [1,2,3,4,5,6,7,8,9,10];
// const newArr=arr.find((num)=>num===4);
// console.log(newArr);

const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr=arr.map((num)=>num>4);
console.log(newArr);
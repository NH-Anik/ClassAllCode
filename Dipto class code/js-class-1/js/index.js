// const number = prompt("enter your result");

// if(number>0){
//     if(number <=32){
//         console.log("your result is fail");
//     }else if(number >=33 && number <=40){
//         console.log("your result is pass D");
//     }else if(number >=41 && number <=50){
//         console.log("your result is pass C");
//     }else if(number >=51 && number <=60){
//         console.log("your result is pass B");
//     }else if(number >=61 && number <=70){
//         console.log("your result is pass A-");
//     }else if(number >=71 && number <=79){
//         console.log("your result is pass A");
//     }else if(number >=80 && number <=100){
//         console.log("your result is pass A+");
//     }else if(number >100){
//         console.log("please enter a valid number under 0 to 100");
//     }
// }else{
//     console.log("please enter a valid number under 0 to 100");
// }


// const num=7;

// switch (num) {
//     case 1:
//     console.log("sat");
//     break;

//     case 2:
//     console.log("sun");
//     break;

//     case 3:
//     console.log("mon");
//     break;

//     case 4:
//     console.log("thu");
//     break;

//     case 5:
//     console.log("wed");
//     break;

//     case 6:
//     console.log("tue");
//     break;

//     case 7:
//         if(number>0){
//             if(number <=32){
//                 console.log("your result is fail");
//             }else if(number >=33 && number <=40){
//                 console.log("your result is pass D");
//             }else if(number >=41 && number <=50){
//                 console.log("your result is pass C");
//             }else if(number >=51 && number <=60){
//                 console.log("your result is pass B");
//             }else if(number >=61 && number <=70){
//                 console.log("your result is pass A-");
//             }else if(number >=71 && number <=79){
//                 console.log("your result is pass A");
//             }else if(number >=80 && number <=100){
//                 console.log("your result is pass A+");
//             }else if(number >100){
//                 console.log("please enter a valid number under 0 to 100");
//             }
//         }else{
//             console.log("please enter a valid number under 0 to 100");
//         }
//     break;

//     default:
//     console.log("default");
//     break;
// }



// for(var i=0;i<10;i++){

//     if(i==3){continue;}

//     console.log("hello");
// }


// let num=0;

// while(num<=11){
//     console.log("hello");
//     num++;
// }


// let num=0;

// do{
//     console.log("hello");
//     num++;
// }
// while(num<=11)

// []
// [[]]
// [[[]]]


// var a=["dipto","@","165455",4545,15441];
// var b=["sipto","#","1",2,3];

// var ex=a.join(" ");
// a.pop();
// a.push("dipto2");
// var ex=a[3].toInteger();


// let ex=a.shift();
// a.unshift("dipto2"); 
// delete a[1];
// a[1]="@"

// console.log(a.copyWithin(2,0));
// console.log(a.length)
// console.log(a[3]+a[4]);

// var nes=[[1,2],[3,4],[5,6]];

// console.log(nes.flat());
// console.log(nes.join(" "));


// var a=["dipto","@","165455",4545,15441];

// a.splice(1,0,"dipto2","#")

// console.log(a.slice(1));

// var let con

// let ar=["dipto","@","165455",4545,15441];

// const obj={name:"dipto",
//     age:20,
//     city:"dhaka",
//     address:"dhaka",
//     pen:{
//         color:"blue",
//         size:10,
//         type:"ballpoint",
//         price:10
//     }
// }


// console.log("Student Name:",obj.name);
// console.log("Student Age:",obj.age);
// console.log("Student City:",obj.city);
// console.log("Student Address:",obj.address);
// console.log("Student Pen Color:",obj.pen.color);
// console.log("Student Pen Size:",obj.pen.size);
// console.log("Student Pen Type:",obj.pen.type);
// console.log("Student Pen Price:",obj.pen.price);


// var a=10;
// var b=20;

// function abc(){
//    console.log(a+b);
// }

// abc();


// var dipto=function(){
//     console.log(a+b);
// }


// dipto();


// const abcd=()=>{
//     console.log(a+b);
// }

// abcd();


// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     const username = document.getElementById('username').value.trim();
//     const password = document.getElementById('password').value.trim();
//     const errorMessage = document.getElementById('errorMessage');
  
//     const validUsername = 'admin';
//     const validPassword = 'password123';
  
//     if (username === validUsername && password === validPassword) {
//       errorMessage.textContent = '';
//       alert('Login successful!');
//     } else {
//       errorMessage.textContent = 'Invalid username or password.';
//     }
//   });
  

//   function forgot(event){
//     event.preventDefault();
//     const bigName=document.forms[0].username.value;
//     console.log(bigName)
// }

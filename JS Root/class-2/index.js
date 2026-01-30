// const a=10;
// const b=20;
// function abc(a,b){
//     return c=a+b;
// }

// let aa=abc(4,5);    
// console.log(aa);


// function myFunction(x,y = 10) {
//   return x + y;
// }
// let nn=myFunction(5); console.log(nn);



// function abc(...kkk){
//     let sum=0;
//     for (let vaa of kkk)
//     sum+=vaa;
//     return sum;
// }

// let result = abc(20,14,16,12,12,19);
// console.log(result);

// a=[]
// console.log(a);


// function data(name, age, place, school){
//    this.name=name;
//    this.age=age;
//    this.place=place;
//    this.school=school;
// }

// const info = new data("dipto",15,"kushtia","police line school");

// console.log(info.name);




// function cal(first,sec){
//     this.firstNumber=first;
//     this.secNumber=sec;
//     this.eq=this.firstNumber+this.secNumber;
// }


// let total= new cal(101,20);

// console.log(total.eq);



// var obj=[
//     {
//     name:"dipto-one",
//     age:15,
//     place:"kushtia",
//     school:"police line school",
//         abc:{
//             name:"dipto-two",
//             age:20,
//             place:"kushtia",
//             school:"police line school",
//             abb:{
//                 name:"dipto-three",
//                 age:25,
//                 place:"kushtia",
//                 school:"police line school"
//             }
//         }
//     },
// ]

// console.log(obj[0].abc.abb.age);



// info={
//     firstName:"dipto",
//     lastName:"mondol",
//     age:15,
//     place:"kushtia",
//     fullName:function(){
//         return this.firstName+" "+this.lastName;
//     }
// }


// var total =  info.fullName();
// console.log(total);

// a = "dipto"; 


// arr=[]

// a=[
//     {
//         'name':"dipto-one",
//         'age':15,
//         'place':"kushtia",
//         'school':"police line school",
//     }
// ]


// var a="dipto";


// function abc(){
//     console.log(a);
// }
// abc()

// console.log(a);

// data=10

// const cat=data;


// var data = new Date();

// console.log(data.getHours());

// const info = new Set();



// const a= "dipto";
// const b= "mondol";
// const c="kushtia";


// info.add(a);
// info.add(b);
// info.add(c);
// console.log(typeof infovar 

// var data = new Set();

// data.add("dipto");
// data.add(15);
// data.add("kushtia");
// data.add("police line school");


// var showDataSize = data.size;

// console.log(showDataSize);

// var text = "";

// for(const x of data){
//     text = text +" "+ x ;
// }

// console.log(text);


// var findData = data.has('Dipto');

// console.log(findData);

// const A = new Set(['a','b','c']);
// const B = new Set(['b','c','d']);
// const C = A.union(B);
// var info ="";
// for(const x of C){
//     info= info +" "+ x;
// }
// console.log(info);


// const A = new Set(['a','b','c']);
// const B = new Set(['b','c','d']);

// const C = A.intersection(B);

// var info ="";
// for(const x of C){
//     info= info +" "+ x;
// }
// console.log(info);

// const A = new Set(['a','b','c']);
// const B = new Set(['b','c','d']);

// const C = B.difference(A);

// var info ="";
// for(const x of C){
//     info= info +" "+ x;
// }
// console.log(info);

// const A = new Set(['a','b','c']);
// const B = new Set(['b','c','d']);

// const C = A.symmetricDifference(B);

// var info ="";
// for(const x of C){
//     info= info +" "+ x;
// }
// console.log(info);

// let text = '';

// const set = new WeakSet();

// var dipto = { name: "dipto", age: 15 };
// var rony = { name: "rony", age: 16 };
// var sumon = { name: "sumon", age: 17 };

// check(dipto);
// check(rony);
// check(sumon);

// function check(obj) {
//   if (set.has(obj)) {
//     console.log(text = text + " " + obj.name + " is already in the set.\n");
//   } else {
//     console.log(text = text + " " + obj.name + obj.age + " is visiting for the first time.\n");
//   }
// }

// const ar=[
//   { 
//     name:"dipto-one",
//     age:15, 
//     place:"kushtia",
//     school:"police line school",
//   },
//   { 
//     name:"dipto-two",
//     age:20, 
//     place:"kushtia",
//     school:"police line school",
//   },
//   { 
//     name:"dipto-three",
//     age:25, 
//     place:"kushtia",
//     school:"police line school",
//   }
// ];


// const res = ar.map((a => a.age * 10));

// console.log(res.delete("dipto-three"));

// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// Delete an Element
// fruits.delete("apples");

// console.log(fruits.clear());
// console.log(fruits.size);
// console.log(fruits.has("oranges"));

// const data="";
// fruits.forEach(

//   function(v,k){
//     console.log(v,'=',k);
//   }
// ); 

// function dipto (q,z){
//   return q+z;
// }

// let q = dipto(100,500)

// console.log(q);


// let myMap = new WeakMap();
// console.log(myMap);


// const fruits = [
//   {name:"apples", quantity:300},
//   {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];

// // Group by ok and low
// const result = Map.groupBy(fruits, myCallback);


// // Callback function to select low volumes 
// function myCallback({ quantity }) {
//   return quantity > 200 ? "Boro" : "choto";
// }


// // Display Results
// for (let x of result.get("Boro")) {
//   console.log(x)
// }



// for (let y of result.get("choto")) {
//   console.log(y)
// }


// let text = "dipto@gmail.com";
// let pattern = /[0-9]/g;

// const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// let result = text.match(re);
// console.log(result);



// const myIterator = Iterator.from(['a', 'b', 'c', 'd', 5, 6]);
// const firstFive = myIterator.drop(4);
// let text = "";
// for (const x of firstFive) {
//   text += x + "<br>";
// }
// console.log(text);

// var arr=[32, 33, 16, 40];
// const filteredIterator = arr.filter(x => x < 18);
// let text = "";
// for (const x of filteredIterator) {
//   text += x + "<br>";
// }

// console.log(text);
var arr=[32, 33, 16, 40];
const jj = arr.find(x => x < 18);

console.log(jj);


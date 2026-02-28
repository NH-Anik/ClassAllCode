// const num= Math.ceil(Math.random()*20);

// console.log(num);

// const numb1=prompt("Guess a number between 1 to 20");

// if(num==numb1){
//     console.log("Matched");
// }else{
//     console.log("My input number is "+ numb1+ " " +"Not Matched" +" "+ num);
// }

// ==========================================================================================


// var today = new Date();

// var cmasDay= new Date(today.getFullYear(), 11, 25);

// console.log(cmasDay);

// if (today.getMonth() == 11 && today.getDate()>=25){
//     cmasDay.setFullYear(cmasDay.getFullYear()+1);
// }

// var oneDay=1000*60*60*24;
// console.log(oneDay);

// console.log(  Math.ceil((cmasDay.getTime()-today.getTime())/oneDay )+ " days left until christmas" );

// ==========================================================================================


// clToFh(25);

// function clToFh (celsius){
    
//     var cTem= celsius;
//     console.log(cTem);
//     var cToFh = cTem*9/5+32;
//     console.log(cToFh);
// }

// fToCld(80);

// function fToCld (fahrenheit){
//     var fTem= fahrenheit;
//     console.log(fTem);
//     var cTem = (fTem-32)*5/9;
//     console.log(cTem);
// }

// ==========================================================================================


// alert(document.URL);
// console.log(`${document.URL} is the current URL`);


// ==========================================================================================



// var name ="dipto";

// var number=10;

// this[name]=number;

// console.log(this[name],name);
// ==========================================================================================

// fileName="index.js";
// console.log(fileName.split(".").pop());
// ==========================================================================================


// var name="Dipto";

// console.log(name.substring(1, 3));
// ===========================================================================================


function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  console.log(part1);
  part2 = str.substring(char_pos + 1, str.length);
  console.log(part2);
    return (part1 + part2);
 }
console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));
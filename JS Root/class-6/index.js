// function abc (e){
//   if (e.length <=1){
//    return e;
//   }
//   cal = e.substring(1,e.length-1);
//   return e[e.length-1] + abc(cal) + e[0];
// }

// console.log(abc("abcd"));

// function abc (e){
//   cal =e.substring(0,1);
//   console.log(cal);
//   return cal+e+cal;
// }

// console.log(abc("abcd"));


// function abc (e){
//   if(e%3==0 || e%5==0){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(abc(15));

// function abc (e){
//    if (e.length < 6){
//     return e;
//    }

//    let result = e;

//    if (e.substring(10,4)=="Script"){
//     result = e.substring(0,4) + e.substring(10,e.length);
//    }
//   return result;
// }

// console.log(abc("JavaScript"));


// function abc (a,b){

//   if(a != b){
//     var firstNumber =Math.abs(a-100);
//     var secondNumber =Math.abs(b-100);
//     if(firstNumber < secondNumber){
//       return a;
//     }else{
//       return b;
//     }
//   }else{
//     return false;
//   }
// }

// console.log(abc(20,100));



// function abc (a,b){
//   let con=0;

//   for(let i=0; i<a.length; i++){
//     if((a.charAt(i)==b) && (i>=1 && i<=a.length)){
//       con = 1;
//       break;
//     }
//   }

//   if(con==1){
//     return true;
//   }else{
//     return false;
//   }

// }

// console.log(abc("abcdefgh","h"));

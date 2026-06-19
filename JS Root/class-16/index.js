// function change_char(str1) {

//     var result = [];

//     for (var i = 0; i < str1.length; i++) {
// console.log('a'.charCodeAt(0));
// console.log(str1.charCodeAt(i));
//         var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0); 
// console.log(char_order);
//         var change_char = 25 - char_order + 'a'.charCodeAt(0); 

//         result.push(String.fromCharCode(change_char));

//     }

//     return result.join(""); 

// }

// console.log(change_char("abcxyz"));


// function change_char(str1) {

//   return str1
//   .split('')
//   .map(char => String.fromCharCode(25 - char.charCodeAt(0) + 'a'.charCodeAt(0)))
//   .join('');
   
// }

// console.log(change_char("abcxyz")); 


// function replace_first_digit(input_str) {
//   return input_str.replace(/[0-9]/, '$');
// }

// console.log(replace_first_digit("abc1dabc"));
 


// function test_fifteen(num) {
//     while (num < 15) { 
//         num++;
//     }
//     return num;
// }

// // 10+1=11+1=12+1=13+1=14+1=15
// console.log(test_fifteen("123")); 
// console.log(test_fifteen("10")); 
// console.log(test_fifteen("5")); 


// function sixteen_bits_reverse(num) {

//     var result = 0; 

//     for (var i = 0; i < 16; i++) {

//         result = result * 2 + (num % 2); 
//        console.log(result);
//         num = Math.floor(num / 2); 
//         console.log(num);

//     }

//     return result;

// }

// console.log(sixteen_bits_reverse(12345));  
// console.log(sixteen_bits_reverse(10));   
// console.log(sixteen_bits_reverse(5));    


// function test_same_elements_both_arrays(arra1, arra2) {
//   var result = 0; 
  
//   for (var i = 0; i < arra1.length; i++) {
   
//     for (var j = 0; j < arra2.length; j++) {

//       if (arra1[i] === arra2[j]) {

//         result++; 

//       }

//     }
//   }
//   return result;
// }

// console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 4, 3]));




// function sort_by_string_length(arra) {
//     for (var i = 0; i < arra.length; i++) {
//         for (var j = i + 1; j < arra.length; j++) {
//           console.log("i: " + i + ", j: " + j);
//             if (arra[i].length > arra[j].length) {
//                 var m = arra[i]; 
//                 arra[i] = arra[j]; 
//                 arra[j] = m; 
//             }
//         }
//     }
//   return arra; 
// }

// var arra = ["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]; 
// console.log("Original array: " + arra + "\n"); 
// console.log(sort_by_string_length(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"])); 


function sort_by_string_length(arra) {
    return arra.sort((a, b) => a.length - b.length);
}

console.log(sort_by_string_length(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"])); 
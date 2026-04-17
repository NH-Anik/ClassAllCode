// function add_two_int_without_carrying(n1, n2) {
//     var result = 0,
//         x = 1; 
//     while (n1 > 0 && n2 > 0) {
//         result = result + x * ((n1 + n2) % 10); 
//         n1 = Math.floor(n1 / 10);
//         n2 = Math.floor(n2 / 10); 
//         x = x* 10; 
//     }
//     return result; 
// }
// console.log(add_two_int_without_carrying(222, 911));



// 4/10/2026

// Function to find the longest string(s) in an array
// function longest_string(str_ara) {
//   var max = str_ara[0].length;

//   str_ara.map(v => 
//     max = Math.max(max, v.length
//     )
//   );

//   console.log(max);

//   result = str_ara.filter(v => v.length == max); 

//   console.log(result);

//   return result;
// }	

// console.log(    longest_string(  ['a', 'aa', 'aaa', 'aaaaa', 'aaaa']  )       ) ;  



// Function to shift each alphabet character in the input string to the next character in the alphabet
// function alphabet_char_Shift(str) {
//   var all_chars = str.split(""); 
//   for(var i = 0; i < all_chars.length; i++) { 
//     var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
//     n = (n + 1) % 26; 
//     all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
//   }
//   return all_chars.join(""); 
// }
// console.log(alphabet_char_Shift("abcdxyz"));


// function longest_string(str_ara) {
//   var max = str_ara[0].length; 
//   str_ara.map(v => 
//     max = Math.max(max, v.length)
//   );
//   result = str_ara.filter(v => v.length == max); 
//   return result; 
// }	

// console.log(
//   longest_string(['a', 'aa', 'aaa', 'aaaaa', 'aaaa'])
// );  




// Function to check if rearranging elements of one array can make it equal to another array
// function array_checking(arra1, arra2) {
//   if (arra1.length !== arra2.length) {
//     return false; 
//   }
//   const sortedArra1 = [...arra1].sort();
//   const sortedArra2 = [...arra2].sort();
//   let result =true;
//   sortedArra1.map((v, i) => {
//     if(v !== sortedArra2[i]) {
//       result = false; 
//     }
//   });
//   return result;
// }

// // Example usage
// console.log(array_checking([10, 20, 30], [10, 20, 30]));  
// console.log(array_checking([10, 20, 30], [20, 10, 30]));  
// console.log(array_checking([10, 20, 30, 40], [10, 30, 20, 40]));  
// console.log(array_checking([10, 20, 30, 40], [10, 30, 20, 60]));   



// Function to find the Kth greatest element in an array
function Kth_greatest_in_array(arr, k) {

  for (var i = 0; i < k; i++) {
    var max_index = i,      
    tmp = arr[i];          

    // Iterate through the remaining elements to find the maximum
    for (var j = i + 1; j < arr.length; j++) {
     console.log(j);
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }


    }

    arr[i] = arr[max_index];
    console.log(arr[i]);
    arr[max_index] = tmp;
  }

  return arr[k - 1];
}

// Example usage
console.log(
  Kth_greatest_in_array([1,2,6,4,5,0], 6)
);       //




// function abc(a){
//     var tamp= false;

//     for(var i = a.length; ; i++){
//         tamp = true;
//         for(var j = 0; j < i-j-1; j++){
//           if(i-j-1< a.length && a[j]!=a[j+1]){
//             tamp = false; 
//             break;
//           }
//         }
       
//         if(tamp){
//           let len= a.length;
//           for(let j = len; j < i; j++){
//             //  a =a+a[i-z-1]
//             a += a[i - j - 1];
//           }
//           return a;
//         }

//     }
// }

// console.log(abc("12245464878464"));


// function abc(a){
//     let rev=a.split("").reverse().join("");
     
//     for(let i = a.length; ; i++){
//         if(rev.slice(0, i-a.length) == a.slice(a.length-i)){
//             return a + rev.slice(i-a.length);
//         }
//     }
// }


// function check_common_element(arra1, arra2) {
//   console.log(arra1.length, arra2);
//   for (var i = 0; i < arra1.length; i++) {
 
//     console.log( arra2.indexOf(5)); 

//     if (arra2.indexOf(arra1[i]) != -1) {
//       return true; 
//     }
//   }
//   return false; 
// }

// console.log(
//   check_common_element([1, 2, 3], [3, 4, 5])
// );


// Function to test a string
function test_string(input_str) {

  // Function to check if symbol is lowercase
  var is_lower_case = function(symbol) {
    if ('a' <= symbol && symbol <= 'z') {
      return true;
    }
    return false;
  }

  // Function to check if symbol is uppercase
  var is_upper_case = function(symbol) {
    if ('A' <= symbol && symbol <= 'Z') {
      return true;
    }
    return false;
  }

  // Check if the first character is lowercase or uppercase
  var is_first_char_lower = is_lower_case(input_str[0]),
    is_first_char_upper = is_upper_case(input_str[0]);

  console.log(is_first_char_lower, is_first_char_upper);

  // If the first character is neither lowercase nor uppercase, return false
  if (!(is_first_char_lower || is_first_char_upper)) {
    return false;
  }

  // Iterate through the string 0,1,2
  for (var i = 1; i < input_str.length; i++) {

    // Check odd positions
    if (i % 2) {

      // Check if the character's case differs from the first character's case
      if (is_lower_case(input_str[i]) === is_first_char_lower || is_upper_case(input_str[i]) === is_first_char_upper) {
        return false; // Return false if cases are the same
      }

    } else {

      // Check if the character's case matches the first character's case
      if (is_lower_case(input_str[i]) !== is_first_char_lower ||is_upper_case(input_str[i]) !== is_first_char_upper) {
        return false; // Return false if cases do not match
      }

    }

  }

  return true; // Return true if conditions are met for the entire string
}

console.log(test_string('xYr'));   // Example usage

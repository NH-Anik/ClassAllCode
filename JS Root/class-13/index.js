// function is_monotonous(num) {

//   if (num.length === 1) {
//       return true;
//   }
  

//   var num_direction = num[1] - num[0];

//   for (var i = 0; i < num.length - 1; i++) {

//     if (num_direction * ( num[ i + 1] - num[i] ) <= 0) {
//       return false;
//     }
    
//   }
  
//   return true;
// }

// console.log(is_monotonous([1, 2, 3]));  
  
// console.log(is_monotonous([1, 2, 2]));   

// console.log(is_monotonous([-3, -2, -1])); 



// function is_permutation(input_arr, n) {

//     for (var i = 0; i < n; i++) {

//         if (input_arr.indexOf(i + 1) < 0) {

//             return false; 

//         }

//     }

//     return true;
// }




// function is_permutation(arr, n) {
//   for (var i = 1; i <= n; i++) {
//     //  1, 2, 3, 4, 5
//     if(!arr.includes(i)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(is_permutation([1, 2, 3, 5, 4], 5)); 



// function mirror_bits(n) {

//     let t = n.toString(2).split("");

//     console.log(t);
	
//     let str_len = t.length;

//     for (let i = 0; i < 8 - str_len; i++) {
//         t.unshift("0");
//     }

//     return parseInt(t.reverse().join(""), 2);
// }


// function mirror_bits(n) {
//   let binary = n.toString(2);
//   let eightBitBinary = binary.padStart(16, '0');
//   console.log(eightBitBinary);
//   let reversedBinary = eightBitBinary.split('').reverse().join('');
//   let mirroredNumber = parseInt(reversedBinary, 2);
//   return mirroredNumber;
// }

// console.log(mirror_bits(14));
// console.log(mirror_bits(56));
// console.log(mirror_bits(234));



// create a calculator using jquery

$(document).ready(function() {
    $('#calculate').click(function() {
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var operator = $('#operator').val();
        var result;
        console.log(num1, num2, operator);
        if (operator === 'add') {
            result = num1 + num2;
        } else if (operator === 'subtract') {
            result = num1 - num2;
        } else if (operator === 'multiply') {
            result = num1 * num2;
        } else if (operator === 'divide') {
            result = num1 / num2;
        }
        $('#result').text(result);
    });
});

   




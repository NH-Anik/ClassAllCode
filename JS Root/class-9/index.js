// function array_max_consecutive_sum(nums, k) {  
//   let result = 0;
//   let temp_sum = 0;
//   for (var i = 0; i < k - 1; i++) {
//     temp_sum += nums[i];
//   }
//   // console.log(result,temp_sum);
//   for (var i = k - 1; i < nums.length; i++) {

//     temp_sum += nums[i];
//     if (temp_sum > result) {
//       result = temp_sum;
//     }
//     // console.log(temp_sum);
//     temp_sum = temp_sum - nums[i-k+1];
//     // console.log(temp_sum);

//   }
//   return result;
// }

// console.log(
//   array_max_consecutive_sum( [1, 2, 3, 14, 5],2 )
// )

// function array_max_diff(arr) {
//   var max_result = 0;   
//     for(var i = 0; i < arr.length; i++) {
//       // console.log(i);
//       // console.log(arr[i]);

//       for(var k = 0; k !== i && k < arr.length; k++) {
//         // console.log(arr[i] , arr[k]);
//           var diff = Math.abs(arr[i] - arr[k]);  
//           console.log(diff); 
//           max_result = Math.max(max_result, diff); 
//       }
//     }
//   return max_result; 
// }

// console.log(
//   array_max_diff(   [1, 2, 3, 8, 9]   )

// ); 




// function array_element_mode(arr) {
//   var ctr = [];  
//   var ans = 0;     

//   for (var i = 0; i < 10; i++) {
//     ctr.push(0);
//   }

//   for (var i = 0; i < arr.length; i++) {
//     console.log(ctr,ans,i);
//     console.log(ctr[arr[i] - 1]++);

//     if (ctr[arr[i] - 1] > ctr[ans]) {
//       ans = arr[i] - 1; 
//     }

//   }

//   return ans + 1;  
// }

// console.log(
//   array_element_mode([1, 2, 3, 2, 2, 8, 1, 9])
// ); 

// function array_element_mode(arr) {
//    return arr.sort((a, b) =>
//     arr.filter(v => v === a).length - arr.filter(v => v === b).length
//   ).pop();
// }

// console.log(
//   array_element_mode([1, 2, 3, 2, 2, 8, 1, 9])
// ); 
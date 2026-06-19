// Function to generate strings by replacing '#' in the input with digits making the resulting number divisible by 3
function is_divisible_by3(mask_str) {
  var digitSum = 0, // Variable to hold the sum of digits in the mask string
    left = '0'.charCodeAt(), // ASCII code of '0'
    right = '9'.charCodeAt(), // ASCII code of '9'
    
    result = [], // Array to store the resulting strings
    mask_data = mask_str.split(''), // Split the input mask string into an array
    hash_pos = -1; // Position of the '#' character
console.log(left, right);
  // Loop through the characters in the mask string array
  for (var i = 0; i < mask_data.length; i++) {
    if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right) {
      digitSum += mask_data[i].charCodeAt() - left; // Calculate digit sum if character is a digit
    } else {
      hash_pos = i; // Store the position of '#' character
    }
  }

  // Loop through numbers 0 to 9 to replace '#' with digits making the number divisible by 3
  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) { // Check if the sum of digits with the new digit is divisible by 3
      mask_data[hash_pos] = String.fromCharCode(left + i); // Replace '#' with the new digit
      result.push(mask_data.join('')); // Push the modified mask string to the result array
    }
  }

  return result; // Return the array containing strings with the '#' replaced by digits
}

// Testing the function with sample inputs
console.log(is_divisible_by3("2#0")); // Output: [ '210', '240', '270' ]
console.log(is_divisible_by3("4#2")); // Output: [ '402', '432', '462', '492' ] 



// Function to check if a point (a, b) is inside a circle with center (x, y) and radius r
function check_a_point(a, b, x, y, r) {
    // Calculate the squared distance between the center of the circle (x, y) and the point (a, b)
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    
    // Square the radius for comparison
    r *= r;
    
    // Check if the squared distance between points is less than the squared radius
    if (dist_points < r) {
        return true; // Point is inside the circle
    }
    return false; // Point is outside the circle or on the circle
}

// Test cases
console.log(check_a_point(0, 0, 2, 4, 6)); // Output: true (Point (0,0) is inside the circle with center (2,4) and radius 6)
console.log(check_a_point(0, 0, 6, 36, 40)); // Output: false (Point (0,0) is outside the circle with center (6,8) and radius 6) 

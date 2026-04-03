// Function to add two integers without carrying
function add_two_int_without_carrying(n1, n2) {
    console.log({ n1, n2 });
    var result = 0, // Initialize the result
        x = 1; // Initialize the multiplier
    console.log({ n1, n2, x, result });
    // Iterate while both numbers have digits
    while (n1 > 0 && n2 > 0) {
        result = result + x * ((n1 + n2) % 10); // Add the current digit without carrying
        console.log({ n1, n2, x, result });
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10); 
        x = x* 10; 
    }

    return result; // Return the final result
}

// Example usage
console.log(add_two_int_without_carrying(222, 911)); // Output: 133
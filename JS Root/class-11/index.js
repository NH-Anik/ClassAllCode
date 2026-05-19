function sort_prime(num) {
  // console.log(num); 

  var prime_num1 = [];
  var prime_num2 = []; 

  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  
  // console.log(prime_num2);
// 5
// 2 3 4 5 =i 
  for (var i = 2;  i <= num;  i++) {
  //  console.log(i);
  //  [true, true, true, true, true, true]= prime_num2
  //  2 =i
    if (prime_num2[i]) {
      prime_num1.push(i);
        // for i=2
        //  [true, true, 2, true, true, true]
        //  [true, true, 2, 3, true, true]
        //  [true, true, 2, 3, 4, true]
        //  [true, true, 2, 3, 4, 5]

        // for i=3
        //  [true, true, false, 3, true, true]
        //  [true, true, false, 3, 4, true]
        //  [true, true, false, 3, 4, 5]

        // fir i=4
        //  [true, true, false, false, 4, true]
        //  [true, true, false, false, 4, 5]

        // for i=5
        //  [true, true, false, false, false, 5]

        // 2*1=2<=5
        
      for (var j = 1; i * j <= num; j++) {
        console.log(j);
        // 2*1=2
        prime_num2[i * j] = false;
         // for i*j=2
         //  [true, true, false, 3, 4, 5]
         //  [true, true, false, false, 4, 5]
         //  [true, true, false, false, false, 5]
         //  [true, true, false, false, false, false]

          // for 3*2=6>
          // for 4*2=8>5
          // for 5*2=10>5


        // console.log(prime_num2);
      }
    }

  }
  // console.log(prime_num1);
  return prime_num1;
}

// console.log(
  sort_prime(5)
// );







function trailing_zeros_factorial(n) {

    var result = 0;

    for (var i = 5; i <= n; i += 5) { 

        var num = i; 
        console.log(i);

        while (num % 5 === 0) { 
            // num /= 5; 1.6
            num=num/5;
            console.log(num);
            result++; 
        }

    }

    return result; 

}

// console.log(
  trailing_zeros_factorial(8)
// );






function prime_factors(num) {




  function is_prime(num) {
    console.log(num);
    console.log(Math.sqrt(num));
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0)
      return false;

    }
    return true; 
  }

  
  
  const result = []; 
  console.log(result);
  
 
  for (let i = 2; i <= num; i++) {
    // 2
    // 3
    // 4
    // 5
     console.log(i); 
     console.log(num);

                        // first time: 2 is prime and 100 % 2 === 0, so we enter the while loop xxxxxxx
                        // second time: 2 is prime and 50 % 2 === 0, so we enter the while loop 
    while (is_prime(i) && num % i === 0) {
      console.log(num);
      console.log(result.includes(i));
      console.log(result.push(i));
      if (!result.includes(i)) result.push(i); 

      num= num / i;
      console.log(num);

    }


  }
  
  return result; 


}


console.log(prime_factors(99)); 


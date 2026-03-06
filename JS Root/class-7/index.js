// function string_reverse(str) 
// {
//     return str.split("").reverse().join("");
// }

// console.log(string_reverse("w3resource"));
// console.log(string_reverse("www"));
// console.log(string_reverse("JavaScript"));

// function capital_letter(str) 
// {
//     str = str.split(" ");
//     console.log(str);
//     var x = str.length;

//     for (var i = 0; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//         console.log(str[i]);
//     }

//     return str.join(" ");
// }

// console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));


// function time_convert(num)
//  { 
//   var hours = Math.floor(num / 60);    
//   var minutes = num % 60;
//   return hours + ":" + minutes;         
// }

// console.log(time_convert(121));
// console.log(time_convert(450));
// console.log(time_convert(1441));

// function ab_Check(str)
//  {
//     return (/a...b/).test(str) || (/b...a/).test(str);
//  }

// console.log(ab_Check("Chainsbreak"));
// console.log(ab_Check("pane borrowed"));
// console.log(ab_Check("a   bCheck"));


// function vowel_Count(str)
// { 

//   return str.replace(/[^dipto]/g, "").length; 
// }

// console.log(vowel_Count("Python"));
// console.log(vowel_Count("w3resource.com"));


// function equal_pt(str)
// { 
//   var str_p = str.replace(/[^p]/g, "");

//   var str_t = str.replace(/[^t]/g, "");

//   var p_num = str_p.length;
//   var s_num = str_t.length;

//   return p_num === s_num;
         
// }
// console.log(equal_pt("paatpss"));
// console.log(equal_pt("paatps"));
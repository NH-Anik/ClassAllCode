
function break_address(url_add) {

    var data = url_add.split("://");
    console.log(data);
    // 0 https
    // 1 www.w3resource.com/javascript-exercises/
    var protocol = data[0];
    // https


    //0 www.w3resource
    //1 /javascript-exercises/
    data = data[1].split(".com");
    var domain = data[0];
    // www.w3resource

    //0 www.w3resource
    //1 javascript-exercises
    data = data[1].split("/");
   // javascript-exercises
    if (data[1]) {
        return [protocol, domain, data[1]];
    }

    return [protocol, domain];
}

var url_add = "https://www.w3resource.com/javascript-exercises/";

console.log("Original address: " + url_add);

console.log(break_address(url_add)); 



function halv_array_swap(iarra) {

  if ((iarra.length % 2) !== 0) {
    return false; 
  }

  for (var i = 0; i < iarra.length / 2; i++) {
    var tmp = iarra[i]; 
    // tmp= 1,2,3
     console.log(iarra.length);
    iarra[i] = iarra[i + iarra.length / 2]; //2
    console.log(iarra);
    // 4,5,6
    iarra[i + iarra.length / 2] = tmp;
    console.log(iarra);
  }
  return iarra; 
}

console.log(halv_array_swap([1, 2, 3, 4, 5, 6])); 
console.log(halv_array_swap([1, 2, 3, 4, 5, 6, 7])); 

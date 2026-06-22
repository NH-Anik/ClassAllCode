
function simplify_path(main_path) {
  // Splitting the path into parts
  var parts = main_path.split('/'), 
  new_path = [], 
  length = 0;

  console.log(parts)
  // Loop through each part of the path
  console.log(parts.length);
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    console.log(part);
    //0 " "
    //1 home
    //2 var

    // Conditions to handle special cases ('.', '..', '')
    if (part === '.' || part === '' || part === '..') {
      if (part === '..' && length > 0) {
        length--; 
      }
      continue; 
    }

    // 0 " " length =0
    new_path[length++] = part;
    // 1 home - 1
    // 2 var - 2
    
  }

  // If the new path is empty, return the root path '/'
  if (length === 0) {
    return '/';
  }

  // Reconstructing the simplified path
  var result = '';
  for (var i = 0; i < length; i++) {
    result += '/' + new_path[i]; 
  }

  return result; 
}

console.log(simplify_path("/home/var/./www/../html//sql/")); 

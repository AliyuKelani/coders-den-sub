function isIsogram(str) {
  //...
   let f_str = str?.toLocaleLowerCase()
  let obj = {};
  for (let char of f_str) {
      if (obj[char]) return false
      obj[char] = 1;
  }
   return true;
}

// function isIsogram(str) {
//   //...
//   let f_str = str?.toLocaleLowerCase();
//   let obj = {};
//   for (let char of f_str) {
//     if (obj[char]) {
//       obj[char] = obj[char] + 1;
//     } else {
//       obj[char] = 1;
//     }
//   }
//   let max = 1;
//   for (let key in obj) {
//     if (obj[key] > max) return false;
//   }
//   return true;
// }
 console.log(isIsogram("Dermatoglyphics")) // true
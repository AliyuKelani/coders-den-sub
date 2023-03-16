var isSquare = function (n) {
  //   let root = Math.floor(Math.sqrt(n))
  //   return root * root == n
  let root = Math.sqrt(n);
  return root == Math.floor(root);
};

function sumOfTwo(param1, param2) {
  return param1 + param2;
}
// let ans = sumOfTwo(1, 2);
// console.log(ans);

function sumOfAll(...params) {
  let total = 0;
  params.forEach((num) => {
    total += num;
  });
  return total;
}
console.log(sumOfAll(1, 2, 3, 4, 5, 30));

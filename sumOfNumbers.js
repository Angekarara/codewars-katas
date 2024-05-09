function getSum(a, b) {
  let big = Math.max(a, b);

  let small = Math.min(a, b);
  let sum = 0;
  if (a !== b) {
    for (let i = small; i <= big; i++) {
      sum += i;
    }
    return sum;
  }
  return a;
}
console.log(getSum(0, -1));

function sum(numbers) {
  "use strict";
  if (numbers.length == 0) {
    return 0;
  }
  return numbers.reduce((acc, num) => acc + num);
}
console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));

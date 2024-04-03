function isValid(formula) {
  if (
    (formula.includes(1) && formula.includes(2)) ||
    (formula.includes(2) && formula.includes(1))
  ) {
    return false;
  }
  if (
    (formula.includes(3) && formula.includes(4)) ||
    (formula.includes(4) && formula.includes(3))
  ) {
    return false;
  }
  if (
    (!formula.includes(5) && formula.includes(6)) ||
    (formula.includes(5) && !formula.includes(6))
  ) {
    return false;
  }
  if (!(formula.includes(7) || formula.includes(8))) {
    return false;
  }
  return true;
}
console.log(isValid([1, 3, 7])); // true
console.log(isValid([7, 1, 2, 3])); // false
console.log(isValid([1, 3, 5, 7])); // false
console.log(isValid([1, 5, 6, 7, 3])); // true
console.log(isValid([5, 6, 7])); // true
console.log(isValid([5, 6, 7, 8])); // true
console.log(isValid([6, 7, 8])); // false
console.log(isValid([7, 8])); // true

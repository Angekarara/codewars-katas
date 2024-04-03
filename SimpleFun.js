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

function fraction(a, b) {
  //coding and coding..
  let smaller = Math.min(a, b);

  let gcf = 0;
  for (i = 1; i <= smaller; i++) {
    if (a % i === 0 && b % i === 0) {
      gcf = i;
    }
  }

  const num1 = a / gcf;
  const num2 = b / gcf;
  const sum = num1 + num2;
  return sum;
}
console.log(fraction(90, 120));
console.log(fraction(72, 46));

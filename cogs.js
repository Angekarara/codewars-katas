function cogRpm(cogs, n) {
  let s = 1;
  for (let i = n; i > 0; --i) {
    s *= -cogs[i] / cogs[i - 1];
  }
  let d = 1;
  for (let i = n; i < cogs.length - 1; ++i) {
    d *= -cogs[i] / cogs[i + 1];
  }
  return [s, d];
}
console.log(cogRpm([100, 50, 25], 0));
console.log(cogRpm([100, 50, 25], 1));
console.log(cogRpm([100, 50, 25], 2));

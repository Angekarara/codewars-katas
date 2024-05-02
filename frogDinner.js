function frogContest(n) {
  let chrisFlies = 0;
  let tomFlies = 0;
  let catFlies = 0;

  for (let i = 0; i <= n; i += 1) {
    chrisFlies += i;
  }

  for (let i = 0; i <= Math.floor(chrisFlies / 2); i += 1) {
    tomFlies += i;
  }

  for (let i = 0; i <= chrisFlies + tomFlies; i += 1) {
    catFlies += i;
  }

  return `Chris ate ${chrisFlies} flies, Tom ate ${tomFlies} flies and Cat ate ${catFlies} flies`;
}
console.log(frogContest(5));

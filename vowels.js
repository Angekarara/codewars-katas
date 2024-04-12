function getCount(str) {
  let count = 0;
  let vowels = "aeiou";
  let str2 = str.split("");
  for (let s of str2) {
    if (vowels.includes(s)) {
      count += 1;
    }
  }
  return count;
}
console.log(getCount("abracadabra"));
console.log(getCount("what"));

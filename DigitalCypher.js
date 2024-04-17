function encode(str, n) {
  let letters = [
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let str2 = str.split("");
  let arr = [];
  let n1 = n.toString().split("").map(Number);

  for (let i = 0; i <= str2.length; i++) {
    if (letters.includes(str2[i])) {
      arr.push(letters.indexOf(str2[i]));
    }
  }
  const maxLength = Math.max(n1.length, arr.length);
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    const num1 = n1[i % n1.length];
    const num2 = arr[i % arr.length];
    result.push(num1 + num2);
  }

  return result.slice(0, arr.length);
}
console.log(encode("scout", 1939));
console.log(encode("az", 123));

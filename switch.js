function flickSwitch(arr) {
  let switchValue = true;
  const result = [];
  for (const item of arr) {
    if (item === "flick") {
      switchValue = !switchValue;
    }
    result.push(switchValue);
  }
  return result;
}
console.log(flickSwitch(["codewars", "flick", "code", "wars"])); // output: [true, false, false, false]
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"])); // output: [false, false, false, false]
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"])); // output: [true, true, false, false, true]

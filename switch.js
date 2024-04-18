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

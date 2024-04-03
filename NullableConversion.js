function convertNullableValues(obj) {
  for (let prop in obj) {
    if (obj[prop] === null) {
      obj[prop] = 0;
    } else if (obj[prop] === undefined) {
      obj[prop] = "";
    }
  }
  return obj;
}
console.log(
  convertNullableValues({
    prop1: null,
    prop2: undefined,
    prop3: "value",
    prop4: 123,
  })
);

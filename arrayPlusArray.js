function arrayPlusArray(arr1, arr2) {
  const arr3 = [...arr1, ...arr2];
  return arr3.reduce((acc, num) => acc + num);
}

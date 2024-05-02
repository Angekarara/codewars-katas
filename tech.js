/*
step1: loop through the array
step2: check if an element duplicates
step3: push it into an empty array

*/
function removeDuplicates(arr) {
  const arr2 = [];
  for (ar of arr) {
    if (ar != ar) {
      arr2.push(ar);
      console.log(arr2);
    }
  }
  return arr2;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

console.log(removeDuplicates(["a", "b", "b", "c", "d", "d", "e"]));
// ['a', 'b', 'c', 'd', 'e']

//removeDuplicates([true, true, false, false, true]) // [true, false]

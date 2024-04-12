function sortList(sortBy, list) {
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
}
const list = [
  { id: 1, value: 10 },
  { id: 2, value: 5 },
  { id: 3, value: 15 },
  { id: 4, value: 7 },
];

console.log(sortList("value", list));

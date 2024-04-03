function sortProducts(arr) {
  const prices = arr.map((product) => product.price);
  prices.sort((a, b) => a - b);
  return prices;
}
console.log(
  sortProducts([
    {
      name: "book",
      price: 2000,
    },
    {
      name: "pen",
      price: 250,
    },
    {
      name: "bag",
      price: 12000,
    },
    {
      name: "shoes",
      price: 3500,
    },
  ])
);

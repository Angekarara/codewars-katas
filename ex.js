const user = {
  id: 1,
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    zipcode: "10001",
  },
};

// Without optional chaining
// const city = user.address.city; // No error
// const country = user.address.country; // Error: Cannot read property 'country' of undefined

// With optional chaining
const city = user.address?.city;
const country = user.address?.country;
console.log(country);

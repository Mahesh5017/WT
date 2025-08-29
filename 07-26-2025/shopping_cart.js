const products = new Map([
  ['apple', 10],
  ['banana', 20],
  ['milk', 30],
  ['bread', 40]
]);

let cart = [];

function addItem(product) {
  if (products.has(product)) {
    cart.push(product);
  }
}

function removeItem(product) {
  const index = cart.indexOf(product);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}

function calculateTotal() {
  let total = 0;
  for (let item of cart) {
    total += products.get(item);
  }
  return total;
}

addItem('apple');
addItem('milk');
addItem('bread');
removeItem('apple');

console.log(cart);
console.log(calculateTotal());

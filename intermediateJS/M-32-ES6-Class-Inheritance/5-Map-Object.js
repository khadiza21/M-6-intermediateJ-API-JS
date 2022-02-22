const products = [
  { productName: "Mobile", price: 24000, color: "black", quantity: 2 },
  { productName: "watch", price: 4000, color: "black", quantity: 4 },
  { productName: "water pot", price: 240, color: "pink", quantity: 6 },
  { productName: "books", price: 7000, color: "customized", quantity: 120 },
  { productName: "chips", price: 100, color: "red", quantity: 30 },
  { productName: "bags", price: 260, color: "black", quantity: 12 },
];

const productName = products.map((pN) => pN.productName);
console.log(productName);
const productPriceOFF = products.map((pN) => pN.price - (pN.price * 20) / 100);
console.log(productPriceOFF);

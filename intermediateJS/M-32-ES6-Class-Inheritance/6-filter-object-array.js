// 6-filter-object-array.js
const friends = ["khadiza", "taina", "tanha", "bk", "tani", "abdur rahman"];

const friendsLength = friends.filter((friend) => friend.length > 6);
console.log(friendsLength);

const products = [
  { productName: "mobile", price: 24000, color: "black", quantity: 2 },
  { productName: "watch", price: 4000, color: "black", quantity: 4 },
  { productName: "water pot", price: 240, color: "pink", quantity: 6 },
  { productName: "mobile", price: 4000, color: "blue", quantity: 1 },
  { productName: "books", price: 7000, color: "customized", quantity: 120 },
  { productName: "mobile covers", price: 100, color: "red", quantity: 30 },
  { productName: "bags", price: 260, color: "black", quantity: 12 },
];

const productName = products.filter((pN) => pN.productName == "mobile");
console.log(productName);
console.log(
  "............................................................................"
);
const productPriceOFF = products.filter(
  (pN) => pN.price - (pN.price * 20) / 100 < 1000
);
console.log(productPriceOFF);

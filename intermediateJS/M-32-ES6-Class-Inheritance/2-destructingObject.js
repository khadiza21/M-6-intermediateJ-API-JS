const fish = {
  id: 34,
  name: "King Hilsha",
  price: 3434,
  phone: "02343343434343",
  addresss: "Chandpur",
  dress: "silver",
};

// const phone = fish.phone;

const { phone, price, dress, id } = fish;

console.log(phone, price);
console.log(phone);
console.log(phone, id);
console.log(phone, dress);

const company = {
  name: "GP",
  ceo: { name: "bk", id: 23, food: "fuchka" },
  web: { work: "web development", employee: 33, framework: "react" },
};

// const work = company.ceo.food;

const { work, framework } = company.web;
const { name, food } = company.ceo;
console.log(work, name, food, framework);

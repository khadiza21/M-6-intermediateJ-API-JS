//declare variable based on the name of an object property
const myObject = { x: 2, y: 50, b: 232, a: 23 };
const { x, b } = myObject;
console.log(b);

//destructuring array
const [p, q] = [45, 23, 31, 64];
console.log(p, q);

const [best, color] = ["Purple", "White"];
console.log(best, color);

// nested object optional chaining
const company = {
  name: "GP",
  ceo: { name: "bk", id: 23, food: "fuchka" },
  web: {
    work: "web development",
    employee: 33,
    framework: "react",
    tech: {
      first: "html",
      second: "CSS",
      third: "JS",
    },
  },
};
//optional chaining
console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);

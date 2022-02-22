class Support {
  name;
  designation = "Support Web Dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

const Ahmed = new Support("Ahmed Khan", "BD");
const salman = new Support("Solaiman Khan", "Dubai");

Ahmed.startSession();
salman.startSession();
console.log(Ahmed, salman);

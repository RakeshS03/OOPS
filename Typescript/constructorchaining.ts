class Base {
  constructor() {
    console.log("Base constructor");
  }
}

class Derived extends Base {
  constructor() {
    super(); // Mandatory
    console.log("Derived constructor");
  }
}

new Derived();

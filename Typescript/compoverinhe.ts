class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor(private engine: Engine) {}

  drive() {
    this.engine.start();
    console.log("Car driving");
  }
}

new Car(new Engine()).drive();

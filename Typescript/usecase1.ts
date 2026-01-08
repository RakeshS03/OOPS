abstract class Vehicle {
  constructor(private speed: number) {} // Encapsulation

  getSpeed(): number {
    return this.speed;
  }

  abstract move(): void; // Abstraction
}

class Car extends Vehicle {
  move(): void {
    console.log(`Car moving at ${this.getSpeed()} km/h`);
  }
}

class Bike extends Vehicle {
  move(): void {
    console.log(`Bike moving at ${this.getSpeed()} km/h`);
  }
}

const vehicles: Vehicle[] = [
  new Car(120),
  new Bike(80)
];

vehicles.forEach(v => v.move()); // Polymorphism

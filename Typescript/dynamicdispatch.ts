class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const a: Animal = new Dog(); // Base reference
a.speak(); // Dog barks (runtime decision)

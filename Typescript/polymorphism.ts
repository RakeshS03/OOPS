class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing rectangle");
  }
}

const shapes: Shape[] = [
  new Circle(),
  new Rectangle()
];

shapes.forEach(shape => shape.draw());

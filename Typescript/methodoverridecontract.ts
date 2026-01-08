class Parent {
  getValue(): number {
    return 10;
  }
}

class Child extends Parent {
  getValue(): number {   // Same signature
    return 20;
  }
}

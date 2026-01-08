class Employee {
  constructor(public name: string) {}

  work() {
    console.log(`${this.name} is working`);
  }
}

class Developer extends Employee {
  code() {
    console.log(`${this.name} is coding`);
  }
}

const dev = new Developer("Rakesh");
dev.work(); // inherited
dev.code(); // own behavior

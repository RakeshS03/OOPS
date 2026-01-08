class User {
  constructor(public name: string) {}
}

const u1 = new User("Rakesh");
const u2 = new User("Rakesh");

console.log(u1 === u2); // false (identity)

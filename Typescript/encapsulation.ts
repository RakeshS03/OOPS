class BankAccount {
  private balance: number; // hidden data

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance; // controlled access
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500

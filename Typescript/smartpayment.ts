// ABSTRACTION (INTERFACE)
interface Authenticatable {
  authenticate(): void;
}
// ABSTRACT CLASS
abstract class PaymentMethod implements Authenticatable {

  // ENCAPSULATION
  private accountId: string;
  private active: boolean;

  constructor(accountId: string) {
    this.accountId = accountId;
    this.active = false;
  }

  public activate(): void {
    this.active = true;
    console.log(`${this.accountId} activated`);
  }

  public deactivate(): void {
    this.active = false;
    console.log(`${this.accountId} deactivated`);
  }

  protected isActive(): boolean {
    return this.active;
  }

  public getAccountId(): string {
    return this.accountId;
  }

  // ABSTRACTION
  abstract processPayment(amount: number): void;

  // Interface method
  abstract authenticate(): void;
}
// INHERITANCE + POLYMORPHISM
class UPIPayment extends PaymentMethod {

  constructor(accountId: string) {
    super(accountId);
  }

  public authenticate(): void {
    console.log("UPI authentication successful");
  }

  public processPayment(amount: number): void {
    if (this.isActive()) {
      console.log(`₹${amount} paid via UPI`);
    } else {
      console.log("UPI account is inactive");
    }
  }
}
// INHERITANCE + POLYMORPHISM
class CreditCardPayment extends PaymentMethod {

  constructor(accountId: string) {
    super(accountId);
  }

  public authenticate(): void {
    console.log("Credit card authentication successful");
  }

  public processPayment(amount: number): void {
    if (this.isActive()) {
      console.log(`₹${amount} paid using Credit Card`);
    } else {
      console.log("Credit card is inactive");
    }
  }
}
// INHERITANCE + POLYMORPHISM
class NetBankingPayment extends PaymentMethod {

  constructor(accountId: string) {
    super(accountId);
  }

  public authenticate(): void {
    console.log("Net Banking authentication successful");
  }

  public processPayment(amount: number): void {
    if (this.isActive()) {
      console.log(`₹${amount} paid via Net Banking`);
    } else {
      console.log("Net Banking account is inactive");
    }
  }
}
class BankSystem {

  public executePayment(
    paymentMethod: PaymentMethod,
    amount: number
  ): void {
    paymentMethod.activate();
    paymentMethod.authenticate();
    paymentMethod.processPayment(amount);
    paymentMethod.deactivate();
  }
}
class SmartBankingApp {

  public static main(): void {

    const upi: PaymentMethod =
      new UPIPayment("UPI-ACC-001");

    const card: PaymentMethod =
      new CreditCardPayment("CC-ACC-002");

    const netBanking: PaymentMethod =
      new NetBankingPayment("NB-ACC-003");

    const bankSystem = new BankSystem();

    bankSystem.executePayment(upi, 1500);
    bankSystem.executePayment(card, 3000);
    bankSystem.executePayment(netBanking, 5000);
  }
}
SmartBankingApp.main();

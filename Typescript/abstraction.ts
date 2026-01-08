abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCardPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Credit Card`);
  }
}

const payment: Payment = new CreditCardPayment();
payment.pay(1000);

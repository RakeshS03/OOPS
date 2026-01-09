#include <stdio.h>


   //ABSTRACT BASE ACCOUNT
   
typedef struct Account {
    void (*deposit)(struct Account *, int);
    void (*display)(struct Account *);
} Account;


typedef struct {
    Account base;
    int balance;
} SavingsAccount;

void savingsDeposit(Account *acc, int amount) {
    SavingsAccount *sa = (SavingsAccount *)acc;
    sa->balance += amount;
}

void savingsDisplay(Account *acc) {
    SavingsAccount *sa = (SavingsAccount *)acc;
    printf("Savings Balance: %d\n", sa->balance);
}


typedef struct {
    Account base;
    int balance;
} CurrentAccount;

void currentDeposit(Account *acc, int amount) {
    CurrentAccount *ca = (CurrentAccount *)acc;
    ca->balance += amount;
}

void currentDisplay(Account *acc) {
    CurrentAccount *ca = (CurrentAccount *)acc;
    printf("Current Balance: %d\n", ca->balance);
}


   //POLYMORPHIC OPERATION
  
void bankOperation(Account *acc) {
    acc->deposit(acc, 1000);
    acc->display(acc);
}

int main() {

    SavingsAccount sa = {
        .base = { savingsDeposit, savingsDisplay },
        .balance = 5000
    };

    CurrentAccount ca = {
        .base = { currentDeposit, currentDisplay },
        .balance = 8000
    };

    bankOperation((Account *)&sa);
    bankOperation((Account *)&ca);

    return 0;
}

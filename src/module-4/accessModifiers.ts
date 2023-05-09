// Access Modifiers

class BankAcount {
  readonly id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  getBalance() {
    console.log(`My Balance is ${this._balance}`);
  }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAcount = new BankAcount(555, "Parvez", 789);

console.log(myAcount);

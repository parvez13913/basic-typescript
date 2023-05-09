// Getter And Setter
class BankAcount1 {
  public name: string;
  readonly id: number;
  private _balance: number;

  constructor(name: string, id: number, _balance: number) {
    this.name = name;
    this.id = id;
    this._balance = _balance;
  }
  //   Gutter
  get balance(): number {
    return this._balance;
  }
  //   getBalance1() {
  //     return this._balance;
  //   }

  // setter
  set diposit(amount: number) {
    this._balance = this._balance + amount;
  }
  //   addDisposit(amount: number) {
  //     this._balance = this._balance + amount;
  //   }
}

const myAcount1 = new BankAcount1("Parvez", 333, 600);

console.log(myAcount1.balance);
myAcount1.diposit = 88;
console.log(myAcount1.balance);

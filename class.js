class Account {
  constructor(id, name, balance) {
    this._id = id
    this.name = name
    this.balance = balance
  }

  get id() {
    return this._id
  }
  get name() {
    return this._name
  }
  set name(val) {
    this._name = val
  }
  get balance() {
    return this._balance
  }
  set balance(value) {
    this._balance = value
  }
  credit(amount) {
    return this.balance + amount
  }
  debit(amount) {
    if (amount <= this.balance) {
      return this.balance - amount
    } else {
      return "Amount exceeded balance"
    }
  }
  transferTo(anotherAccount, amount) {
      debugger
    if (amount <= this.balance) {
        debugger
      this.balance= this.balance - amount
      anotherAccount.balance = anotherAccount.credit(amount)
      console.log(`Amount ${amount} transferred from account ${this.name} to account ${anotherAccount}.`);
    } else {
      console.log(`Insufficient balance in account ${this.name} for transfer.`);
    }
  }
  static identifyAccounts(acc1, acc2) {
    if (acc1 == acc2) {
      return 'These accounts are the same'
    } else {
      return 'not same'
    }
  }
  toString() {
    return `This is account name ${this.name}`
  }
}
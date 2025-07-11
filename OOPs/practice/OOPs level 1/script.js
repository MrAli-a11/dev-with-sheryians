//constructor function
// function Toffe(flavor, price, expiry){
//   this.flavor =  flavor
//   this.price = price
//   this.expiry = expiry
// }

// const t1 = new Toffe('Chocolate', 10, '10/12/2025')
// const t2 = new Toffe('Mango', 5, '08/12/2026')
// const t3 = new Toffe('Strawberry', 20, '10/12/2026')

// console.log(t1, t2, t3)


// class
class Toffe {
  constructor(flavor, price, expiry) {
    this.flavor = flavor
    this.price = price
    this.expiry = expiry
  }
}

const t1 = new Toffe('Banana', 15, '15/12/2012')
console.log(t1)



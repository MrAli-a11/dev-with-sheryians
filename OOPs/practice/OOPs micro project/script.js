// class Library{
//   constructor(){
//     this.books = []
//   }
//   addBooks(books){
//     this.books.push(...books)
//   }
//   listAllBooks(){
//     this.books.forEach((book, idx)=>{
//       console.log(`${idx + 1}) ${book.name} by ${book.author}`)
//     })
//   }
// }

// class Book{
//   constructor(name, isbn, price, author){
//     this.name = name;
//     this.isbn = isbn;
//     this.price = price;
//     this.author = author;
//     this.readStatus = false;
//   }
//   info(){
//     console.log(
//       `${this.name} is written by ${this.author} and you have ${this.readStatus ? 'read it' : 'not read this book'} and is available on Amazon at $${this.price}`
//     )
//   }
//   changeReadStatus(){
//     this.readStatus = !this.readStatus;
//   }
// }

// const allahabadLibrary = new Library()
// const book1 = new Book('Nothing', 5478625415, 149, 'Mr Ali')
// const book2 = new Book('The Crash', 9780903973280, 370, 'Freida McFadden')
// const book3 = new Book('The Tenant', 9780903973280, 349, 'Freida la Marrie')

// allahabadLibrary.addBooks([book1, book2, book3])


class MobileShop{
  constructor(){
    this.mobiles = []
  }
  addMobiles(mobiles){
    this.mobiles.push(mobiles)
  }
  listAllMobiles(){
    this.mobiles.forEach((mobiles)=>{
      console.log(`${mobiles.company} - ${mobiles.model} - ${mobiles.price} - ${mobiles.color}`)
    })
  }
}

class Mobile{
  constructor(company, model, price, color){
    this.id = Math.floor(Math.random()*10000)
    this.company = company;
    this.model = model;
    this.price = price;
    this.color = color;
    this.sims = [];
  }
  getMobileInfo(id){
    console.log(`${this.company} - ${this.model} - ${this.price} - ${this.color}`)
  }
  insertSim(sim){
    if(this.sims.length === 2) {
      console.log('Sorry! you already have two sims inserted ')
      return;
    }
    this.sims.push()
  }
}

class Sim{
  constructor(brand, balance){
    this.brand = brand
    this.balance = balance
  }
  addBalance(balance){
    if(balance < 0){
      console.log('Balance should be greater than 0')
      return;
    }
    this.balance += balance
  }
}

const myMobileShop = new MobileShop()
const samsung = new Mobile('Samsung', 'S-Ultra', 36999, 'Black')
const Vi = new Sim('Vi', 359)
samsung.insertSim(Vi)
myMobileShop.addMobiles(samsung)
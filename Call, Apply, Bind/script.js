// const user = {
//   firstname: 'Hasnain',
//   lastname: 'Ali',
// }

// const user2 = {
//   firstname: 'Rehan',
//   lastname: 'Ali'
// }

// const printFullName = function(homeTown, state){
//     console.log(`${this.firstname} ${this.lastname} from ${homeTown}, ${state}`)
//   }


// Call method  
// printFullName.call(user, 'Daser', 'UP')
// printFullName.call(user2, 'Daser', 'UP')

// Apply method
// printFullName.apply(user, ['Daser', 'UP'])
// printFullName.apply(user2, ['Daser', 'UP'])

// Bind method
// const printMyName = printFullName.bind(user, 'Daser', 'UP')
// const printMyName2 = printFullName.bind(user2, 'Daser', 'UP')

// printMyName()
// printMyName2()


// const arr = ['Ali', 'Khan']

// const printFullName = function(homeTown, state){
//   console.log(`${arr[0]}, ${arr[2]} from ${homeTown}, ${state}`)
// }

// printFullName.call(arr, 'Daser', 'UK')


function discount(price) {
  console.log(`${this.name} final price is ₹${price - price * this.discount}`);
}

const product1 = { name: "Shoes", discount: 0.1 };
const product2 = { name: "Watch", discount: 0.2 };

// 👉 Use call() for product1 and apply() for product2 with price ₹1000

discount.call(product1, 500)
discount.apply(product2, [100])

function greetUser(greeting, name) {
  console.log(`${greeting}, ${name}`);
}

const sayHello = greetUser.bind(null, "Hello",  );

sayHello('Ali')

const user = {
  name: "Zain",
  sayHi: function() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const btn = document.querySelector("#btn");
// 👉 Bind user.sayHi to button click (use bind to retain context)


const btn = document.querySelector('button')
const myIntro = document.querySelector('#intro')
const body = document.body

function Employee(name, id, age, city){
  this.name = name
  this.id = id
  this.age = age
  this.city = city
}

Employee.prototype.company = 'Amazon'

Employee.prototype.intro = function(){
  myIntro.innerHTML = `Hi, I'm ${this.name}, a ${this.age}-year-old professional based in ${this.city}, currently working at ${this.company}. My employee ID is ${this.id}.`
}

const e1 = new Employee('Ali', 'E56847', 19, 'Hyderabad')

btn.addEventListener('click', ()=>{
  e1.intro()
})
let name = document.querySelector('.name')
let status = document.querySelector('.friend')
let btn = document.querySelector('button')

let x = 0;

function click() {
  if (x === 0) {
    status.innerHTML = 'Friend'
    status.style.color = 'green'
    btn.innerHTML = 'Remove Friend'
    x = 1
  } else {
    status.innerHTML = 'Stranger'
    status.style.color = 'red'
    btn.innerHTML = 'Add Friend'
    x = 0
  }
}

btn.addEventListener('click', click)
let btn = document.querySelector('button')
let percent = document.querySelector('#percent')
let growth = document.querySelector('#growth')
let grow = 0

btn.addEventListener('click', function(){
  let print = setInterval(() => {
    grow++
    percent.innerHTML = grow+'%'
    growth.style.width = grow+'%'
  }, 50);

  setTimeout(function(){
    clearInterval(print)  
    btn.innerHTML = 'Downloaded'
    btn.style.opacity = '0.5'
    btn.style.cursor = 'not-allowed'
    btn.disabled = true
  }, 5000)
})

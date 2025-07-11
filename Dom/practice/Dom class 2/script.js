// let box = document.querySelector('#box')
// let btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//   let c1 = Math.floor(Math.random()*256)
//   let c2 = Math.floor(Math.random()*256)
//   let c3 = Math.floor(Math.random()*256)

//   box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
// })


let iplTeams = [
  {
   team: 'RCB',
   primary: 'red',
   secondary: 'black'
  }, 
  {
   team: 'CSK',
   primary: 'yellow',
   secondary: 'green'
  }, 
  {
   team: 'MI',
   primary: 'blue',
   secondary: 'gold'
  }, 
  {
   team: 'DC',
   primary: 'blue',
   secondary: 'black'
  }, 
  {
   team: 'RR',
   primary: 'pink',
   secondary: 'green'
  }, 
  {
   team: 'SRH',
   primary: 'Orange',
   secondary: 'Black'
  }, 
  ]

let teamGuess = document.querySelector('h1')
let btn = document.querySelector('button')
let body = document.querySelector('body')

btn.addEventListener('click', function(){
  let num = Math.floor(Math.random()*iplTeams.length)
  let winner = iplTeams[num]
  teamGuess.innerHTML = winner.team
  body.style.backgroundColor = winner.primary
  
})





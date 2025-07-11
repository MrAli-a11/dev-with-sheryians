const body = document.querySelector('body')


body.classList.add('light')
body.classList.add('dark')

if(body.classList.contains('light')){
  body.classList.add('dark')
}else body.classList.add('light')

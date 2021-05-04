const close = document.querySelector('.sidebar-header__close')
const burger = document.querySelector('.header__burger')

const header = document.querySelector('.header')
const content = document.querySelector('.content')
const sidebar = document.querySelector('.sidebar')

console.log(close.attributes)

burger.addEventListener('click', ()=>{

  header.classList.add('blur')
  content.classList.add('blur')
  sidebar.classList.add('open')


})
close.addEventListener('click', ()=>{

  header.classList.remove('blur')
  content.classList.remove('blur')
  sidebar.classList.remove('open')
})

content.addEventListener('click', ()=>{

  header.classList.remove('blur')
  content.classList.remove('blur')
  sidebar.classList.remove('open')

})


const close = document.querySelector('.sidebar-header__close')
const burger = document.querySelector('.header__burger')

const header = document.querySelector('.header')
const content = document.querySelector('.content')
const sidebar = document.querySelector('.sidebar')

console.log(close.attributes)

burger.addEventListener('click', ()=>{

  sidebar.classList.add('open')


})
close.addEventListener('click', ()=>{

  sidebar.classList.remove('open')
})




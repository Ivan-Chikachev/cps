const chats = document.querySelectorAll('.chat');
const feedbackModal = document.querySelector('.feedback-modal');
const feedbackClose = document.querySelector('.feedback-modal__close');

const calls = document.querySelectorAll('.call');
const callModal = document.querySelector('.call-modal');
const callClose = document.querySelector('.call-modal__close');

const sidebarClose = document.querySelector('.sidebar-header__close')
const burger = document.querySelectorAll('.header__burger')
const sidebar = document.querySelector('.sidebar')

const area = document.querySelector('.area');

const modalWindow = (btn, modal, close) =>{

  btn.forEach(item => {

      item.addEventListener('click', (e)=>{
        modal.classList.add('open')
        area.classList.add('open')

        if(modal !== sidebar){
          sidebar.classList.remove('open')
        }

        e.preventDefault()
      })
    }
  )
  close.addEventListener('click', ()=>{

    modal.classList.remove('open')

  })

  area.addEventListener('click', ()=>{

    modal.classList.remove('open')
    area.classList.remove('open')

  })
}
modalWindow(chats, feedbackModal, feedbackClose)
modalWindow(calls, callModal, callClose)
modalWindow(burger, sidebar, sidebarClose)

const isCloseModal = (close) =>{
  close.addEventListener('click', ()=>{

    if(!sidebar.classList.contains('open') &&
      !callModal.classList.contains('open') &&
      !feedbackModal.classList.contains('open')){
      area.classList.remove('open')
    }

  })
}
isCloseModal(feedbackClose)
isCloseModal(callClose)
isCloseModal(sidebarClose)




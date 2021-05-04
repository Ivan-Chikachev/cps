const sliders = document.querySelectorAll('.swiper-container')

sliders.forEach(slider => {

  let swiper;
  const mobSlider = () => {

    if (window.innerWidth <= 768 && slider.dataset.mobile === 'false') {
      swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      slider.dataset.mobile = 'true'
    }
    if (window.innerWidth > 768) {
      slider.dataset.mobile = 'false';

      if (slider.classList.contains('swiper-container-initialized')) {
        swiper.destroy()
      }
    }
  }
  mobSlider()
  window.addEventListener('resize', () => {
    mobSlider()
  })

})


const btnShowMore = document.querySelector('.brands__read-more');
const brandsItems = document.querySelectorAll('.brands__items');


btnShowMore.onclick = function () {
  brandsItems.forEach(function (textItem) {
    btnShowMore.classList.toggle('open')
    textItem.classList.toggle('open')
    if (btnShowMore.innerHTML === 'Показать все') {
      btnShowMore.innerHTML = 'Скрыть'
    } else if (btnShowMore.innerHTML === 'Скрыть') {
      btnShowMore.innerHTML = 'Показать все'
    }
  })
};

const btnReadMore = document.querySelector('.read-more');
const serviceText = document.querySelectorAll('.service-content__text');


btnReadMore.onclick = function () {
    serviceText.forEach(function (textItem) {
        btnReadMore.classList.toggle('open')
        textItem.classList.toggle('open')
        if (btnReadMore.innerHTML === 'Читать далее') {
            btnReadMore.innerHTML = 'Скрыть'
        } else if (btnReadMore.innerHTML === 'Скрыть') {
            btnReadMore.innerHTML = 'Читать далее'
        }
    })
};

const triggerTabs = document.querySelectorAll('.tab-trigger')

triggerTabs.forEach((trigger) => {
    trigger.addEventListener('click', function () {
        const id = this.getAttribute('data-tab'),
            content = document.querySelector('.tab-content[data-tab="' + id + '"]'),
            activeTrigger = document.querySelector('.tab-trigger.active'),
            activeContent = document.querySelector('.tab-content.active');
        activeTrigger.classList.remove('active');
        trigger.classList.add('active');

        activeContent.classList.remove('active');
        content.classList.add('active');
    });
});
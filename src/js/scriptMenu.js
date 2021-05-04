const menuLink = document.querySelectorAll(".menu__link");
const langLink = document.querySelectorAll(".lang__item");

function addClassActive (items) {
    return (event) => {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("active");
        }
        event.target.className += " active";
    }
}

function init(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = addClassActive(items);
    }

}

init(menuLink);
init(langLink);
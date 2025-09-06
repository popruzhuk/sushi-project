const showPopUp = document.querySelectorAll('.show-popup');
const popup = document.querySelector('.popUp');
const buttonPop = document.querySelectorAll('.buttonPop a');
const closePopUp = document.querySelectorAll('.closePopUp');


showPopUp.forEach(button => {
    button.addEventListener('click', () => {
        popup.classList.add('popUpActive');
    });
});

buttonPop.forEach(button => {
     button.addEventListener('click', () => {
        popup.classList.remove('popUpActive');
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        popup.classList.remove('popUpActive');
    }
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('popUpActive');
    }
});

closePopUp.forEach(button => {
    button.addEventListener('click', () => {
        popup.classList.remove('popUpActive');
    });
});
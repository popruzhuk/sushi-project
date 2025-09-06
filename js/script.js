const showBusket = document.querySelectorAll('.showBusket');
const basket = document.querySelector('.basket');
const makeDeal = document.querySelectorAll('.makeDeal');
const closeBasket = document.querySelectorAll('.closeBasket');
const closeSouse = document.querySelectorAll('.closeSouse');
const souseElements = document.querySelectorAll('.souse');
const prodButtons = document.querySelectorAll('.prod');
const body = document.querySelector('body'); // To control body scroll

// Show basket and disable scroll when clicking on .showBusket elements
showBusket.forEach(button => {
    button.addEventListener('click', () => {
        if (basket) {
            basket.classList.add('active');
            body.classList.add('no-scroll'); // Disable scroll
        }
    });
});

// Hide basket and enable scroll when clicking on .makeDeal elements
makeDeal.forEach(button => {
    button.addEventListener('click', () => {
        if (basket) {
            basket.classList.remove('active');
            body.classList.remove('no-scroll'); // Enable scroll
        }
    });
});

// Add 'souseActive' class to each .souse element when clicking on .prod buttons
prodButtons.forEach(button => {
    button.addEventListener('click', () => {
        souseElements.forEach(souse => {
            souse.classList.add('souseActive');
        });
    });
});

// Hide souse popup when clicking on .closeSouse elements
closeSouse.forEach(button => {
    button.addEventListener('click', () => {
        souseElements.forEach(souse => {
            souse.classList.remove('souseActive');
        });
    });
});

// Hide basket and enable scroll when pressing 'Escape'
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && basket) {
        basket.classList.remove('active');
        body.classList.remove('no-scroll'); // Enable scroll
    }
});

// Hide basket and enable scroll when clicking outside of it
if (basket) {
    basket.addEventListener('click', (event) => {
        if (event.target === basket) {
            basket.classList.remove('active');
            body.classList.remove('no-scroll'); // Enable scroll
        }
    });
}

// Hide basket and enable scroll when clicking on .closeBasket elements
closeBasket.forEach(button => {
    button.addEventListener('click', () => {
        if (basket) {
            basket.classList.remove('active');
            body.classList.remove('no-scroll'); // Enable scroll
        }
    });
});


const burgerMenus = document.querySelectorAll('.burgerMenu');
const burgers = document.querySelectorAll('.burger');
const closeBurgerMenu = document.querySelectorAll('.closeBurgerMenuBTN');

burgers.forEach((button, index) => {
    button.addEventListener('click', () => {
        burgerMenus[index].classList.toggle('active');
    });
});

closeBurgerMenu.forEach((button, index) => {
    button.addEventListener('click', () => {
        burgerMenus[index].classList.remove('active');
    });
});

const dateTimeButton = document.getElementById('dateTimeButton');
const button1 = document.getElementById('courierButtonHideCalendar1');
const button2 = document.getElementById('courierButtonHideCalendar2');
const buttonActive1 = document.getElementById('buttonActive1');
const buttonActive2 = document.getElementById('buttonActive2');
const buttonActive11 = document.getElementById('buttonActive11');
const buttonActive21 = document.getElementById('buttonActive21');
const hurry = document.getElementById('hurry');

function hideCalendar () {
    dateTimeButton.classList.remove('dateTimeButtonActive');
    button1.classList.add('active');
    button2.classList.remove('active');
    hurry.classList.add('hurryActive');
}

function hideShowCalendar () {
    dateTimeButton.classList.add('dateTimeButtonActive');
    button2.classList.add('active');
    button1.classList.remove('active');
    hurry.classList.remove('hurryActive');
}

document.addEventListener('DOMContentLoaded', () => {
    button1.classList.add('active');
    buttonActive1.classList.add('active');
    buttonActive11.classList.add('active');
});

function changeNum(button, delta) {

    const cutleryBtn = button.parentElement;
    const btnsNum = cutleryBtn.querySelector('.btnsNum');
    let num = parseInt(btnsNum.textContent);

    num += delta;

    if (num < 0) num = 0;
    if (num > 5) num = 5;

    btnsNum.textContent = num;
}

function optionActive(element) {
    let options = document.querySelectorAll('.option div');
    options.forEach(option => option.classList.remove('optionActive'));

    element.classList.add('optionActive');
}


let currentLanguage = 'RU';

// Функція для вибору мови
function selectLanguage(language) {
    const dropdownContent = document.querySelectorAll('.dropdown-content');
    const languages = ['RU', 'EN', 'IS'];

    // Оновлення тексту кнопки на вибрану мову
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
        btn.firstChild.textContent = language;
    });

    // Очищення меню перед додаванням нових варіантів
    dropdownContent.forEach(content => {
        content.innerHTML = '';

        // Додавання мов у меню, окрім вибраної
        languages.forEach(lang => {
            if (lang !== language) {
                content.innerHTML += `<a href="#" onclick="selectLanguage('${lang}')">${lang}</a>`;
            }
        });
    });

    // Оновлення поточної мови
    currentLanguage = language;

    // Закриття меню та повернення іконки до початкового стану
    dropdownContent.forEach(content => {
        content.classList.remove('show');
    });
    document.querySelectorAll('.dropdown-icon').forEach(icon => {
        icon.classList.remove('rotate-180');
    });
}

// Перемикання меню при натисканні на кнопку
document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); // Запобігає закриттю меню при натисканні всередині
        const dropdownContent = btn.nextElementSibling;
        const dropdownIcon = btn.querySelector('.dropdown-icon');

        dropdownContent.classList.toggle('show');
        dropdownIcon.classList.toggle('rotate-180');
    });
});

// Закриття меню при натисканні поза його межами
window.onclick = function(event) {
    if (!event.target.closest('.language-selector')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
        document.querySelectorAll('.dropdown-icon').forEach(icon => {
            icon.classList.remove('rotate-180');
        });
    }
};
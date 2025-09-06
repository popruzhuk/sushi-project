let selectedDay = null;

document.addEventListener('click', function(event) {
    const calendarContainer = document.getElementById('calendarContainer');
    const dateTimeButton = document.getElementById('dateTimeButton');
    if (!calendarContainer.contains(event.target) && event.target !== dateTimeButton) {
        calendarContainer.style.display = 'none';
    }
});

function showCalendar() {
    const calendarContainer = document.getElementById('calendarContainer');
    calendarContainer.style.display = 'block';
    const now = new Date();
    populateMonths(now.getMonth(), now.getFullYear());
    renderCalendar();
    initializeTime(); // Додаємо ініціалізацію часу при показі календаря
}

function populateMonths(currentMonth, currentYear) {
    const monthSelect = document.getElementById('month');
    const now = new Date();
    const currentYearNow = now.getFullYear();

    monthSelect.innerHTML = '';
    for (let month = 0; month < 12; month++) {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = new Date(2000, month).toLocaleString('uk', { month: 'long' });
        if (month < currentMonth && currentYear === currentYearNow) {
            option.disabled = true;
        }
        monthSelect.appendChild(option);
    }
    monthSelect.value = currentMonth;
}

function renderCalendar() {
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = '';

    const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = parseInt(document.getElementById('month').value);
    const currentYear = now.getFullYear();
    
    // Дні тижня
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day-header');
        dayElement.textContent = day;
        calendarElement.appendChild(dayElement);
    });
    
    // Дні місяця
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyElement = document.createElement('div');
        calendarElement.appendChild(emptyElement);
    }

    for (let day = 1; day <= lastDayOfMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        if ((currentMonth === now.getMonth() && day < now.getDate()) || currentMonth < now.getMonth()) {
            dayElement.classList.add('disabled-day');
        } else {
            dayElement.addEventListener('click', () => selectDay(day, currentMonth, currentYear));
        }
        if (day === currentDay && currentMonth === now.getMonth()) {
            dayElement.classList.add('current-day');
        }
        if (selectedDay && selectedDay.day === day && selectedDay.month === currentMonth) {
            dayElement.classList.add('selected-day');
        }
        calendarElement.appendChild(dayElement);
    }
}

function selectDay(day, month, year) {
    selectedDay = { day, month, year };
    renderCalendar();
    updateDateTime();
}

function initializeTime() {
    const now = new Date();
    const hourInput = document.getElementById('hour');
    const minuteInput = document.getElementById('minute');

    // Set initial values to current time
    hourInput.value = now.getHours().toString().padStart(2, '0');
    minuteInput.value = now.getMinutes().toString().padStart(2, '0');
}

function validateTime() {
    const hourInput = document.getElementById('hour');
    const minuteInput = document.getElementById('minute');
    const hourError = document.getElementById('hourError');
    const minuteError = document.getElementById('minuteError');

    let isValid = true;

    // Validate hour
    if (hourInput.value < 0 || hourInput.value > 23) {
        hourError.textContent = 'Введіть годину від 0 до 23';
        isValid = false;
    } else {
        hourError.textContent = '';
    }

    // Validate minute
    if (minuteInput.value < 0 || minuteInput.value > 59) {
        minuteError.textContent = 'Введіть хвилину від 0 до 59';
        isValid = false;
    } else {
        minuteError.textContent = '';
    }

    if (isValid) {
        updateDateTime();
    }
}

function updateDateTime() {
    const dateTimeButton = document.getElementById('dateTimeButton');
    const hour = document.getElementById('hour').value.padStart(2, '0');
    const minute = document.getElementById('minute').value.padStart(2, '0');
    if (selectedDay) {
        const { day, month, year } = selectedDay;
        const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
        dateTimeButton.textContent = `${day} ${months[month]} ${year}, ${hour}:${minute}`;
    } else {
        dateTimeButton.textContent = `Вибрати дату і час`;
    }
}



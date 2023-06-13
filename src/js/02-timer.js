import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  intervalId: null,
  isActive: false,

  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate > options.defaultDate.getTime()) {
      refs.btnStart.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },

  start() {
    const selectedDate = document.getElementById('datetime-picker').value;
    const targetDate = new Date(selectedDate).getTime();

    this.intervalId = setInterval(() => {
      refs.btnStart.disabled = true;
      const currentDate = Date.now();
      const remainingTime = targetDate - currentDate;
      const time = convertMs(remainingTime);

      if (remainingTime > 0) {
        updateClockface(time);
      } else {
        clearInterval(this.intervalId);
        refs.daysEl.textContent = '00';
        refs.hoursEl.textContent = '00';
        refs.minutesEl.textContent = '00';
        refs.secondsEl.textContent = '00';
        console.log('Таймер завершено!');
      }
    }, 1000);
  },
};

refs.btnStart.addEventListener('click', options.start);

const fp = flatpickr(refs.myInput, options);

function updateClockface({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minutesEl.textContent = `${minutes}`;
  refs.secondsEl.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

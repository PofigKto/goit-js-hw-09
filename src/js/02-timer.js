import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
// добавляю библиотеку нотифликс
// all modules
import Notiflix from 'notiflix';
// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ====нашла ссылки на элементы флрмы ввода даты и полей вывода дней, часов, минут, секунд===============
const refs = {
  buttonStartEl: document.querySelector('button'),
  timerEl: document.querySelector('.timer'),
  fieldsEl: document.querySelectorAll('.field'),
  fieldValueEl: document.querySelector('.value'),
  fieldValueAllEl: document.querySelectorAll('.field .value'),
  daysFieldEl: document.querySelector('.field [data-days]'),
  hoursFieldEl: document.querySelector('.field [data-hours]'),
  minutesFieldEl: document.querySelector('.field [data-minutes]'),
  secondsFieldEl: document.querySelector('.field [data-seconds]'),
  input: document.querySelector('#datetime-picker'),
};
refs.timerEl.style.display = 'flex';
refs.input.addEventListener('click', onInputClick);
refs.buttonStartEl.addEventListener('click', onButtonStartClick);
// ======кнопка старт вначале неактивна(добавляем ей атрибут дизейбл со значением тру)
refs.buttonStartEl.setAttribute('disabled', true);
// ========функция обработки события клик на инпуте для выбора даты  =============
function onInputClick(e) {
  // console.log(e.target.Date);
  console.log('выбираю дату');
}
// console.log(selectedDate.getTime());
let selectedDate;
// ======== использую библиотеку flatpickr  при клике на инпут - открывает календарь для выбора даты
flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    const dateNow = new Date();
    console.log(dateNow);
    console.log(dateNow.getTime());
    const diferentInTime = selectedDate.getTime() - dateNow.getTime();
    console.log(diferentInTime);
    if (diferentInTime <= 0) {
      //   console.log('Please choose a date in the future');
      Notiflix.Notify.warning('Please choose a date in the future');
      // alert('Please choose a date in the future');
    } else {
      // ======после ввода валидной даты  кнопка старт становиться неактивной(удаляем ей атрибут дизейбл).
      refs.input.style.backgroundColor = 'aqua';
      refs.buttonStartEl.removeAttribute('disabled');
      refs.buttonStartEl.style.backgroundColor = 'lime';
    }
  },
});
// ========функция обработки события клик на инпуте для выбора даты  =============
function onButtonStartClick(e) {
  console.log('посчитаем время');
  let diferentTime;
  // ======запускаем таймер - для вывода оставшегося времени до выбраной даты=====
  const timerID = setInterval(() => {
    // ====текущая дата на момент нажатия кнопки старт====
    const dateNow = new Date();
    console.log(dateNow);
    // ====текущая дата в мс===
    console.log(dateNow.getTime());
    // ====выбраная дата в мс===
    console.log(selectedDate.getTime());
    // ====разница во времени  в мс===
    diferentTime = selectedDate.getTime() - dateNow.getTime();
    if (diferentTime > 0) {
      console.log(diferentTime);
      console.log(convertMs(diferentTime));
      // если до выбраной даты осталось время, то обновляем интерфейс
      // - выводим это время в формате
      updateClockFace(convertMs(diferentTime));
      // updateClockFace({ days, hours, minutes, seconds });
      // console.log(`${days} :: ${hours} :: ${minutes} :: ${seconds}`);
    } else clearInterval(timerID);
    // иначе - если время ноль - останавливаем таймер====
  }, 1000);
}
// =========функция обновления интерфейса========
function updateClockFace({ days, hours, minutes, seconds }) {
  // refs.fieldValueEl.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
  console.log((refs.daysFieldEl.textContent = `${days}`));
  console.log((refs.hoursFieldEl.textContent = `${hours}`));
  console.log((refs.minutesFieldEl.textContent = `${minutes}`));
  console.log((refs.secondsFieldEl.textContent = `${seconds}`));
  console.log((refs.daysFieldEl.style.color = 'red'));
  console.log((refs.hoursFieldEl.style.color = 'red'));
  console.log((refs.minutesFieldEl.style.color = 'red'));
  console.log((refs.secondsFieldEl.style.color = 'red'));
  // refs.fieldValue.style.color = 'red';
}
// функция конвертации числа мс в формат день час мин сек
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}
// ========функция которая добавляет "0" до 2х цифр
function pad(value) {
  return String(value).padStart(2, '0');
}
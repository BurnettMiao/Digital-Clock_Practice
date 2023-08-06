let dayText = document.querySelector('.day');
let monthText = document.querySelector('.month');
let timeText = document.querySelector('.time');

const allMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const allDay = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

setInterval(() => {
  let date = new Date();
  let day = allDay[date.getDate()];
  let month = allMonth[date.getMonth()];
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }

  dayText.textContent = day;
  monthText.textContent = month;
  timeText.textContent = hour + ':' + minute + ':' + second;
});

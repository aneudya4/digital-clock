const timeContainer = document.querySelector('h1');
const checkbox = document.querySelector('input');
let is24Hours = false;
const getTime = () => {
  const date = new Date();
  const timeOfTheDay = date.getHours() > 12 ? 'PM' : 'AM';
  let hours = is24Hours ? date.getHours() : date.getHours() > 12 ? date.getHours() - 12: date.getHours();
  let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
  timeContainer.textContent = `${hours}:${minutes}:${seconds} ${timeOfTheDay}`;
};

checkbox.addEventListener('change', (event) => {
  localStorage.setItem('is24Hours', event.target.checked);
  return (is24Hours = event.target.checked);
});

setInterval(getTime, 1000);

window.addEventListener('load', (event) => {
  is24Hours = localStorage.getItem('is24Hours') === 'true' ? true : false;
  checkbox.checked = is24Hours;
});

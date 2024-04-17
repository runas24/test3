const clock = document.querySelector('.clock');
const clockFace = clock.querySelector('.clock-face');
const hour = clockFace.querySelector('.hour');
const minute = clockFace.querySelector('.minute');
const second = clockFace.querySelector('.second');

function updateTime() {
    const now = new Date();
    const hourValue = now.getHours();
    const minuteValue = now.getMinutes();
    const secondValue = now.getSeconds();

    hour.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    minute.textContent = minuteValue < 10 ? `0${minuteValue}` : minuteValue;
    second.textContent = secondValue < 10 ? `0${secondValue}` : secondValue;
}

updateTime();

setInterval(updateTime, 1000);

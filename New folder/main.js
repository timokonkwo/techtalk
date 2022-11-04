const seconds = document.querySelector(".seconds .number");
      minutes = document.querySelector(".minutes .number");
      hours = document.querySelector(".hours .number");
      days = document.querySelector(".days .number");

let secValue = 60,
    minValue = 60
    hourValue = 24,
    dayValue = 21;
 
 const timeFunction = setInterval(() => {
    secValue--;

    if (secValue === 0){
        minValue--;
        secValue = 60;
    }
    if (minValue === 0){
        hourValue--;
        minValue = 60;
    }
    if (hourValue === 0){
        dayValue--;
        hourValue = 60;
    }
    if (dayValue === 0){
        clearInterval(timeFunction);
    }

    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue; 
    minutes.textContent = minValue < 10 ? `0${minValue}` :minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` :hourValue;
    day.textContent = dayValue < 10 ? `0${dayValue}` :dayValue;


 }, 1000); //100ms = 1s 

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;

let daysLeft = document.querySelector('button[data-days]');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // console.log(options.defaultDate);
    if (selectedDates[0] <= options.defaultDate) {
        window.alert("Please choose a date in the future");
    }
    else { 
    startBtn.disabled = false;
    }
    const ms = selectedDates[0] - options.defaultDate;
        // console.log(ms);
        startBtn.addEventListener('click', startTimer);
        console.log(convertMs(ms));
        let timerId = null;
function startTimer () {
    if (selectedDates[0] < options.defaultDate) {
       timerId = setInterval(() => {
            convertMs(ms)
        }, 1000);
        console.log(convertMs(ms))
    }
    // clearInterval(timerId);
}
                
    },
    
};


flatpickr("#datetime-picker", options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

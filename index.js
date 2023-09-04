// Calculate time remaining until the event date
const eventDate = new Date('2023-09-15T12:00:00'); // Example event date
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

function updateTimer() {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        daysEl.innerText = days
        hoursEl.innerText = hours
        minutesEl.innerText = minutes
        secondsEl.innerText = seconds
    } else {
        timerElement.innerHTML = 'Event has started!';
    }
}

updateTimer();
setInterval(updateTimer, 1000);

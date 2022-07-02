const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

function countdown() {
	const currentDate = new Date();
	let year = currentDate.getFullYear();
	const newYear = "1 Jan " + (year + 1);
	const newYearDate = new Date(newYear);
	const totalSeconds = (newYearDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	dayEl.innerHTML = days;
	hoursEl.innerHTML = formatTime(hours);
	minsEl.innerHTML = formatTime(minutes);
	secsEl.innerHTML = formatTime(seconds);
}
countdown();
function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);

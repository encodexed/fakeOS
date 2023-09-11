// Getting the time
export const getCurrentTime = () => {
	const now = new Date();

	let day;
	switch (now.getDay()) {
		case 0:
			day = "Sun";
			break;
		case 1:
			day = "Mon";
			break;
		case 2:
			day = "Tue";
			break;
		case 3:
			day = "Wed";
			break;
		case 4:
			day = "Thu";
			break;
		case 5:
			day = "Fri";
			break;
		case 6:
			day = "Sat";
			break;
		default:
			day = "???";
	}

	let hour = now.getHours();
	let xm = "AM";
	if (hour > 12) {
		hour -= 12;
		xm = "PM";
	}

	let minute = now.getMinutes();
	if (minute < 10) {
		minute = `0${minute}`;
	}

	let second = now.getSeconds();
	if (second < 10) {
		second = `0${second}`;
	}

	return `${day} ${hour}:${minute}:${second} ${xm}`;
};

const dateTime = document.querySelector("#dateTime");
dateTime.textContent = getCurrentTime();
setInterval(() => {
	dateTime.textContent = getCurrentTime();
}, 1000);

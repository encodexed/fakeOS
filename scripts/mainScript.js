// Creates a way to track if user is interacting with menubar
let menuClicked = false;
const allMenuItems = document.querySelectorAll(".menu-bar-hoverable");
allMenuItems.forEach((item) => {
	// Will turn on/off menu interaction mode
	item.addEventListener("click", (e) => {
		if (menuClicked) {
			menuClicked = false;
			removeSystemHighlight(item);
		} else {
			menuClicked = true;
			addSystemHighlight(item);
		}
	});

	// Adds styling for menu interaction
	item.addEventListener("mouseover", (e) => {
		if (menuClicked) {
			addSystemHighlight(item);
		}
	});

	item.addEventListener("mouseleave", (e) => {
		removeSystemHighlight(item);
	});
});

const addSystemHighlight = (element) => {
	if (!element.classList.contains("system-highlight")) {
		element.classList.add("system-highlight");
		element.children[1].style.display = "block";
	}
};

const removeSystemHighlight = (element) => {
	if (element.classList.contains("system-highlight")) {
		element.classList.remove("system-highlight");
		element.children[1].style.display = "none";
	}
};

// Getting the time
const getCurrentTime = () => {
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

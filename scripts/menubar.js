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

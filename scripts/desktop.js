// Interacting with desktop icons

const desktop = document.querySelector("main");
const desktopIcons = desktop.children;

Array.from(desktopIcons).forEach((icon) => {
	// Apps/files open upon double click
	icon.addEventListener("dblclick", (e) => {
		switch (icon.children[1].textContent) {
			case "Minecraft":
				const minecraftModal = document.querySelector("#minecraftModal");
				minecraftModal.style.display = "block";
				break;
			case "Monday's Notes":
				const notesModal = document.querySelector("#mondaysNotesModal");
				notesModal.style.display = "block";
				break;
			case "Shopping List":
				const shoppingListModal = document.querySelector("#shoppingListModal");
				shoppingListModal.style.display = "block";
				break;
			default:
				console.log(
					`You tried to open the unhandled app, "${icon.children[1].textContent}"`
				);
		}
	});
});

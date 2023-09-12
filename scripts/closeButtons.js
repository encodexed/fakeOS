// Clicking the red button closes the modal
const closeMinecraft = document.querySelector("#closeMinecraft");
closeMinecraft.addEventListener("click", (e) => {
	const minecraftModal = document.querySelector("#minecraftModal");
	minecraftModal.style.display = "none";
});

const closeMondaysNotes = document.querySelector("#closeMondaysNotes");
closeMondaysNotes.addEventListener("click", (e) => {
	const notesModal = document.querySelector("#mondaysNotesModal");
	notesModal.style.display = "none";
});

const closeShoppingList = document.querySelector("#closeShoppingList");
closeShoppingList.addEventListener("click", (e) => {
	const shoppingListModal = document.querySelector("#shoppingListModal");
	shoppingListModal.style.display = "none";
});

const textInput = document.getElementById("text-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("list");

const items = [];

button.addEventListener("click", addItem);
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

function addItem() {
  const newItem = textInput.value.trim();

  // Check if the item is not empty and not a duplicate
  if (newItem && !items.includes(newItem)) {
    items.push(newItem);

    // Clear the input field
    textInput.value = "";

    // Create a new list item for the latest item
    let li = document.createElement("li");
    li.innerHTML = newItem;

    // Append the new item to the existing list
    list.appendChild(li);
  }
}

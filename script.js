const textInput = document.getElementById("text-input");
const addButton = document.getElementById("add-btn");
const clearButton = document.getElementById("clear-btn");
const list = document.getElementById("list");

const items = [];

addButton.addEventListener("click", addItem);
clearButton.addEventListener("click", clearList);
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});

function deleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
}

function addItem() {
  const newItem = textInput.value.trim();

  // Check if the item is not empty and not a duplicate
  if (newItem && !items.includes(newItem)) {
    items.push(newItem);

    // Clear the input field
    textInput.value = "";

    // Create a new list item for the latest item
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.innerHTML = newItem;
    deleteButton.innerHTML = `<i class="gg-trash"></i>`;

    // Append the new item to the existing list
    list.appendChild(li);
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      li.innerHTML = "";
      list.removeChild(li);
      items.pop(newItem);
    });
  }
}

function clearList() {
  items.length = 0;
  list.textContent = "";
}

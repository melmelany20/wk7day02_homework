const ITEMS_CONTAINER = document.getElementById("items");
const ITEMS_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("itemTemplate");

let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo-test");

    return JSON.parse(value);
}

function setItems(items) {
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo-test", itemsJson);
}

function addItems() {
    items.unshift({
        description: "",
        completed: false
    })

    setItems(items);
    refreshList();
}

function refreshList() {
    //TODO: sort items

    ITEMS_CONTAINER.innerHTML = "";

    for (const item of items) {
        const itemElement = ITEMS_TEMPLATE.contentEditable.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addItems();
});
refreshList();
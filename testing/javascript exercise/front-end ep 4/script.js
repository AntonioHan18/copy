const inputTag = document.getElementsByClassName("form-control")[0]; //HTML Collection
const orderListTag = document.getElementsByClassName("orderList")[0];

const handleChange = (event) => {
const inputValue = event.target.value;
const listItem = document.createElement("li");
listItem.classList.add("list-group-item");
listItem.append(inputValue);
orderListTag.append(listItem);
inputTag.value = "";
};


inputTag.addEventListener("change", handleChange);
const inputTag = document.getElementsByClassName("form-control")[0]; //HTML Collection
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

let productId = 1;
const handleChange = (event) => {
const inputValue = event.target.value;
const productContainer = document.createElement("div");
productContainer.classList.add("productContainer");
const parentDiv = document.createElement("div");
parentDiv.classList.add("productName");
parentDiv.addEventListener("click", () => {
    const classExist = parentDiv.classList.contains("purchased");
    if(classExist) {
        parentDiv.classList.remove("purchased");
        console.log("it is remove ",classExist);

    }else{
    parentDiv.classList.add("purchased");
        console.log("it is add" , classExist )
    }
})

const spanTag = document.createElement("span");
const trashIcon = document.createElement("i");
trashIcon.classList.add("fa-solid","fa-trash-can");
trashIcon.addEventListener("click", (event) => {
    productContainer.remove(); 
})
spanTag.id = productId;
const product = productId.toString()  + ". "+ inputValue;
spanTag.append(product);
parentDiv.append(spanTag);
productContainer.append(parentDiv,trashIcon);
shoppingListTag.append(productContainer);
inputTag.value = "";
productId += 1;
};


inputTag.addEventListener("change", handleChange);
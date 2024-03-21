
const inputTag = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

productId = 1;
const handler = (event) => {
    const inputValue = event.target.value;
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click" , () => {
        const classExist = parentDiv.classList.contains("purchased");
        if(classExist) {
            parentDiv.classList.remove("purchased");
        }else {
            parentDiv.classList.add("purchased");
        }
        
    })
    const trashIcon = document.createElement("li");
    trashIcon.classList.add("fa-solid","fa-trash-can");
    trashIcon.addEventListener("click", ()=> {
        parentDiv.remove();
    })

    const spanTag = document.createElement("span");
    spanTag.id = productId;
    const product = productId.toString() + ". " + inputValue;
    productId += 1;
    spanTag.append(product);
    parentDiv.append(spanTag,trashIcon);
    shoppingListTag.append(parentDiv);
    inputTag.value = "";

}

inputTag.addEventListener("change", handler)
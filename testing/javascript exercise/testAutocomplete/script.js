// Fetch API

const autoCompleteInputTag = document.getElementsByClassName(
  "autoCompleteInput"
)[0];

let products;
const url = 'https://fakestoreapi.com/products';
fetch(url).then((response)=>{
  const responseData = response.json();
  console.log("Data from server:",responseData);
  return responseData;    
})
.then((productDataFromServer)=>{
  products = productDataFromServer;
  console.log("product:",products);
  autoCompleteInputTag.disabled= false;

})
.catch((error)=>{
  console.log("inside catch:",error);
})
  
  const resultContainerTag = document.getElementsByClassName(
    "resultContainer"
  )[0];
  
  const enterProductTag = document.getElementsByClassName(
    "enterProduct"
    )[0];
  
  let filteredProducts = [];
  let searchText = [];
  
  autoCompleteInputTag.addEventListener("keyup", (event) => {
    if (products === undefined) {
      return;
    }
    if (
      event.key === "ArrowDown" ||
      event.key === "ArrowUp" ||
      event.key === "Enter"
    ) {
      navigateAndSelectProduct(event.key);
      return;
    }
  
    resultContainerTag.innerHTML = "";
     searchText = event.target.value.toLowerCase();
    if (searchText.length === 0) {
      return;
    }
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchText);
    });
      
    const hasProductsToShow = filteredProducts.length > 0;
    if (hasProductsToShow) {
      for (let i = 0; i < filteredProducts.length; i++) {
        const productItemContainer = document.createElement("div");
        productItemContainer.id = filteredProducts[i].id;
        productItemContainer.classList.add("productItemContainer");
  
        const productName = document.createElement("div");
        productName.classList.add("productName");
        productName.append(filteredProducts[i].title);
  
        const productImage = document.createElement("img");
        productImage.classList.add("productImage");
        productImage.src = filteredProducts[i].image;
  
        productItemContainer.append(productImage,productName);
        resultContainerTag.appendChild(productItemContainer);
      }
    }
  });
  
  let indexToSelect = -1;
  const navigateAndSelectProduct = (key) => {
    if (key === "ArrowDown") {
      if (indexToSelect === filteredProducts.length - 1) {
        indexToSelect = -1;
        deselectProduct();
        return;
      }
      indexToSelect += 1;
      const productItemContainerToSelect = selectProduct(indexToSelect);
      if (indexToSelect > 0) {
        deselectProduct();
      }
      productItemContainerToSelect.classList.add("selected");
  
    } else if (key === "ArrowUp") {
      if(indexToSelect === -1){
        return;
      }
      
      if(indexToSelect === 0){
        deselectProduct();
        indexToSelect = -1;
        return;
      }
      indexToSelect -= 1;
  
      deselectProduct()
      const productItemContainerToSelect = selectProduct(indexToSelect);
      productItemContainerToSelect.classList.add("selected");
  
    } else {
  
      if(filteredProducts.length === 0){
        return;
      }
      const enteredProduct = selectProduct(indexToSelect);
  
       enterProductTag.innerHTML = "";
  
      if(searchText.length > 0){
        
      const enterProductName = document.createElement("div");
      enterProductName.classList.add("enterProductName");
  
      const enterProductContainer = filteredProducts[indexToSelect].title.toString();
      //  const enterProductContainerToSelect = document.getElementsByClassName(enterProductContainer);
      const productImage = document.createElement("img");
        productImage.classList.add("productImage");
        productImage.src = filteredProducts[indexToSelect].image;
       enterProductName.append(productImage,enterProductContainer);
       enterProductTag.appendChild(enterProductName);
       enterProductTag.classList.add("exist")
  
      }else if(searchText.length === 0 ) {
        enteredProductTag.remove();
      }
    }
  };
  
  const selectProduct = (index) => {
      const productIdToSelect = filteredProducts[index].id.toString();
      const productItemContainerToSelect = document.getElementById(productIdToSelect);
    
      productItemContainerToSelect.style.backgroundColor = "#237BFF";
      productItemContainerToSelect.lastChild.style.color = "white";     
      return productItemContainerToSelect;
  }
  
  const deselectProduct = () => {
    const productToDeselect = document.getElementsByClassName("selected")[0];
    productToDeselect.style.backgroundColor = "white";  
    productToDeselect.lastChild.style.color = "black";
    productToDeselect.classList.remove("selected")
    
  }
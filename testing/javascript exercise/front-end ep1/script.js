/* Document Object Model (DOM) CRUD */

// c = create, r= read, u = update, d= delete


// create html element
// read html element
// update html element
// delete html element

// <div> Hello World </div>

const h1Element = document.createElement("h1");
 const textNode = document.createTextNode("Hello Yangon");
h1Element.appendChild(textNode);
const tagCollection = document.getElementsByTagName("body"); // HTML Collection []
const bodyElement = tagCollection[0];
bodyElement.appendChild(h1Element);

// r = read
const readH1Element = document.getElementsByTagName('h1')[0];
console.log("Text inside h1 element before update :", readH1Element.textContent);

// u = update
readH1Element.textContent = "Welcome to Mandalay";
console.log("Text inside h1 element after update :", readH1Element);  

// d = delete
readH1Element.remove();

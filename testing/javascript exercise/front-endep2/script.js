/*Useful DOM methods and properties */

const bodyElement = document.getElementsByTagName("body")[0] //HTMLCollection
console.log("Body element:", bodyElement);
/*
const parentDiv = document.getElementsByClassName("parent")[0];
parentDiv.innerHTML = "";

const divWithId = document.getElementsById("myIdTest");
console.log("divWithId:", divWithId);
*/

/*
<div class=" parent">
    <div class = "child">child one</div>
    <div class = "child">child two</div>
  </div>
  */

const parentDiv = document.createElement("div");
parentDiv.classList.add ("parent" , "testClass");
parentDiv.classList.remove("testClass");
const childDivOne = document.createElement("div");
childDivOne.classList.add("child");
childDivOne.append("child one");

const childDivTwo = document.createElement("div");
childDivTwo.classList.add("child");
childDivTwo.append("child two");

parentDiv.append(childDivOne,childDivTwo);

bodyElement.appendChild(parentDiv);

const styleTestDiv = document.getElementsByClassName("styleTest")[0];
console.log("styleTestDiv's background color:",styleTestDiv.style.backgroundColor);
console.log("styleTesrDiv's height:",getComputedStyle(styleTestDiv).height);
console.log("styleTestDiv's width:",getComputedStyle(styleTestDiv).width);


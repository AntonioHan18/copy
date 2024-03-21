 
const first = document.getElementById("first");
// console.dir(first);
// console.dir(first.id);
// console.dir(first.innerHTML);
// console.dir(first.innerText);
// console.dir(first.style);
// console.dir(first.style.border);
// console.dir(first.className);
// console.dir(first.classList);
// console.dir(first.classList[2]);

// console.log("camelCase");
// console.log("kebab-case");
// console.log("snake_case");
// console.log("PascalCase");

// console.log(first.innerHTML);
// first.innerHTML = "HI Friends";
// console.log(first.innerText);
// // first.title = "This is Title";
// first.className = "One Two Three";
// first.classList.add("Four");
// first.classList.remove("Four");
// console.log(first.classList.contains("Two"));

// first.classList.toggle("message");
// first.classList.toggle("message");
// console.dir(first.className);

// console.dir(first.attributes.myName);

// first.setAttribute("myName","nameChange");
// console.log(first.getAttribute("myName"));

const img = document.getElementById("img");
const input = document.getElementById("input");
const inputFile = document.getElementById("inputFile")

// img.src = "./2.png"
img.setAttribute("src","2.png")

// img.width -= 600;
// img.height -= 100;

// console.log(img.width);
// console.log(img.height);
// console.dir(img);
// console.log(img.src);
// console.log(img.getAttribute("src"));

img.style.borderRadius = "11px";
img.style.border = "2px solid red"


console.log(input);
input.valueAsDate = new Date();
d = new Date();
d.setFullYear(3000);
input.valueAsDate = d;

console.log(inputFile.files);










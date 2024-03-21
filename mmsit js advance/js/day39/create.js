
const body =  document.getElementsByTagName("body")[0];
const h1 = document.createElement("h1");
h1.innerText = "Min Ga Lar Par <b>Bold</b>";

const  p = document.createElement('p');
p.innerHTML = "Hello World <b>Bold</b>"

const ul = document.createElement("ul");
// const li = document.createElement("li");
// li.innerHTML = "Apple";

const createLi = (text)=> {
    const li = document.createElement("li");
    li.innerText = text;
    return li;
}

// ul.append(createLi("apple"));
// ul.appendChild(createLi("mango"));

const fruits = ["apple","mango","banana","bean"];
fruits.forEach(fruit => ul.append(createLi(fruit)) );

document.body.append(h1,p,ul);

const resultElement =document.getElementById("result");
const inputWidth =document.getElementsByClassName("width")[0];
const inputBreadth =document.getElementsByClassName("breadth")[0];
const calc =document.getElementsByClassName("calc")[0];
const store =document.getElementsByClassName("store")[0];
const clear =document.getElementsByClassName("clear")[0];
const history =document.getElementsByClassName("history")[0];


const h1 = document.querySelector("h1");
const p = document.createElement("p");
p.innerText = "this is after";

h1.after(p);

let ans =[];

calc.onclick = ()=>{
     ans = inputWidth.value * inputBreadth.value +"sqft";
    resultElement.innerText = `${inputWidth.value}ft * ${inputBreadth.value}ft = ${ans}`;
    inputWidth.value=inputBreadth.value= null;
};

clear.onclick = () =>{
    resultElement.innerText = "";
    history.innerHTML = "";
}

store.onclick=() =>{
    // history.innerHTML += `<li class = "animate__animated animate__fadeInDown">${resultElement.innerText}</li>`;
    const li = document.createElement("li");
    li.classList.add("animate__animated","animate__fadeInDown");
    li.innerText = resultElement.innerText;
    history.append(li);
    history.innerText = null;
}
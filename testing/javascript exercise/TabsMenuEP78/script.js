
const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const tabs = ["home", "service", "about us", "contact us", "login"];            

const handleTabChange = (event)=> {
    const clickedTabId = event.target.id;
    const clickedLiTag = document.getElementById(clickedTabId);
    const clickedLiTagWidth = clickedLiTag.offsetWidth;
    const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
    sliderTag.style.width = clickedLiTagWidth + "px";
    sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`;
}

for (let i = 0; i < tabs.length; i++) {
    const liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.addEventListener("click",handleTabChange);
    liTag.id = i;
    ulTag.append(liTag);
    if(i === 0) {
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
}
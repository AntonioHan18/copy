
const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const tabs = ["home", "service", "about us", "contact us","login"];     

const handleChangeTab = (event)=> {
    const clickedTabId = event.target.id;
    const clickedLiTag = document.getElementById(clickedTabId);
    clickedLiTag[i].addEventListener("click",(event)=>{
      console.log(event.target.value);
    } )
    const clickedLiTagWidth = clickedLiTag.offsetWidth;
    const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
    sliderTag.style.width = clickedLiTagWidth + "px";
    sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`;
}

let i = 0;
while (i < tabs.length) {
    const liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click",handleChangeTab);
    ulTag.append(liTag);
    i++;
}

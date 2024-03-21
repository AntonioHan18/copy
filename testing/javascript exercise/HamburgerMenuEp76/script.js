
const HamburgerMenuContainerTag = document.querySelector(
    ".HamburgerMenuContainer"
);

const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");

const overLayMenuTag = document.querySelector(".overLayMenu");
const LiTag = document.getElementsByTagName("li");

HamburgerMenuContainerTag.addEventListener("click", () => {

    if(HamburgerMenuContainerTag.classList.contains("isOpened")){
        overLayMenuTag.classList.remove("showOverLayMenu")
        hamburgerLine2Tag.classList.remove("hideLine2");
        hamburgerLine1Tag.classList.remove("rotatePlus45deg");
        hamburgerLine3Tag.classList.remove("rotateMinus45deg");
        HamburgerMenuContainerTag.classList.remove("isOpened");
        for (let i = 0; i < LiTag.length; i++) {
            LiTag[i].classList.remove("MoveLiTagUp");            
        }

    }else{
        overLayMenuTag.classList.add("showOverLayMenu")
        hamburgerLine2Tag.classList.add("hideLine2");
        hamburgerLine1Tag.classList.add("rotatePlus45deg");
        hamburgerLine3Tag.classList.add("rotateMinus45deg");
        HamburgerMenuContainerTag.classList.add("isOpened");
        for (let i = 0; i < LiTag.length; i++) {
            LiTag[i].classList.add("MoveLiTagUp");            
        }
    }
   
})
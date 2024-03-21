
const transformButtonTag = document.querySelector(".transformButton");
const transformDivTag = document.querySelector(".transform");

transformButtonTag.addEventListener("click", ()=> {
    transformDivTag.classList.add("startTransition")
})
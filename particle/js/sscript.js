//selectors

const app = document.querySelector("#app");
const dataInputTag = document.querySelector("#dataInput");
const textInputTag = document.querySelector("#textInput");
const addBtnTag = document.querySelector("#addBtn");
const listsTag = document.querySelector(".lists");
const listTotalCount = document.querySelector("#listTotalCount");
const doneCount = document.querySelector("#doneCount");
const createForm = document.querySelector("#createForm");
const allDone = document.querySelector("#allDone");


//function

const countList =()=>{
    // counting List
    let total = document.querySelectorAll(".list").length;
    // ui update
    listTotalCount.innerText =  total;

    return total;
}

 const countDoneFun =()=>{
    // counting List
    let total = document.querySelectorAll(".form-check-input:checked").length;
    // ui update
    doneCount.innerText =  total;

    return total;
}

let listIndex = 0;

const createList = (text) => {
    const list =document.createElement("div");
    const id ="list"+ listIndex++;
    list.className = "list";
    list.innerHTML = `
    <div class="border border-2 p-3 d-flex justify-content-between align-items-center mb-3 animate__animated animate__zoomInLeft">
        <div class="form-check">
            <input type="checkbox" id="${id}" class="form-check-input" id>
            <label for="${id}" class="form-check-label">
                ${text}
            </label>
        </div>

        <div class="controls">
            <button class="btn btn-sm btn-primary list-edit-btn">
                <i class="bi bi-pencil"></i>
            </button>

            <button class="btn btn-sm btn-primary list-del-btn">
                <i class="bi bi-trash pe-none"></i>
            </button>

         </div>
        </div>
        
    </div>
    `
    

    const delBtn = list.querySelector(".list-del-btn");
    delBtn.addEventListener("click", ()=>{
        // console.log(list);
        // if (confirm("Are U sure to delete list ?")) {
    
        // }
        list.children[0].classList.replace("animate__zoomInLeft","animate__zoomOutLeft");
        list.children[0].addEventListener("animationend",()=>{
            list.remove();
            countList();
            countDoneFun();
        })
    })

    const listEditBtn = list.querySelector(".list-edit-btn");
    const label = list.querySelector(".form-check-label");
    listEditBtn.addEventListener("click",()=>{
        const input = document.createElement("input");
        input.classList.add("form-control");
        input.value = label.innerText;

        // label.innerHTML = `<input value =${text}>`
        label.innerHTML ="";
        label.append(input);
        input.focus();

        input.addEventListener("blur",()=>{
            label.innerText =input.value;
        })
    })        

    const check = list.querySelector(".form-check-input");
    check.addEventListener("click",()=>{
        countDoneFun();
        label.classList.toggle("text-decoration-line-through");
        list.querySelector(".list-edit-btn").toggleAttribute("disabled"); 
    })

    return list;
}

//process or task

// addBtnTag.addEventListener("click",()=>{
//     listsTag.append(createList(textInputTag.value));
//     textInputTag.value= null;
//     countList();
//     countDoneFun();
// })  
 
// textInputTag.addEventListener("keydown",(event)=>{
//     if (event.key === "Enter") {
//         listsTag.append(createList(textInputTag.value));
//         textInputTag.value= null;
//         countList();
//         countDoneFun();
//     }
// })

createForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    listsTag.append(createList(textInputTag.value));
        textInputTag.value= null;
        countList();
        countDoneFun();
})

allDone.addEventListener("click",()=>{
    const allList = document.querySelectorAll(".list");
    allList.forEach(list =>{
        list.querySelector(".form-check-input").click();
    })
})


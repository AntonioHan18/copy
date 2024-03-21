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


const countList = ()=>{
    let total = document.querySelectorAll(".list").length;
    listTotalCount.innerText = total;
    return total;
}

const doneCountList =()=>{
    // counting List
    let total = document.querySelectorAll(".form-check-input:checked").length;
    // ui update
    doneCount.innerText =  total;
    

    return total;
}

let listIndex = 0;

const createList = (text)=>{
    const list =document.createElement("div");
    list.className = "list";
    const id = "no.1" + listIndex++;
    list.innerHTML = `
    <div class="border border-2 p-3 d-flex justify-content-between align-items-center mb-3 animate__animated animate__zoomInLeft">
        <div class="form-check">
            <input type="checkbox"class="form-check-input" id="${id}">
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
    delBtn.addEventListener("click",()=>{
        if(confirm("Are u sure to delete?")){
            list.children[0].classList.replace("animate__zoomInLeft","animate__zoomOutLeft");
            list.children[0].addEventListener("animationend",()=>{
                list.remove();
                countList();
                doneCountList();
            });
        }
    });

    const editBtn = list.querySelector(".list-edit-btn");
    const label = list.querySelector(".form-check-label");
    editBtn.addEventListener("click",()=>{
        const input = document.createElement("input");
        input.value = label.innerText;
        label.innerText ="";
        label.append(input);
        input.focus();
        
        input.addEventListener("blur",()=>{
            label.innerText = input.value;
        })
    });
   
    const check = list.querySelector(".form-check-input");
    check.addEventListener("click",()=>{
        doneCountList();
        label.classList.toggle("text-decoration-line-through");
        list.querySelector(".list-edit-btn").toggleAttribute("disabled"); 
    })
    
    return list;
}

createForm.addEventListener("submit",()=>{
    listsTag.append(createList(textInputTag.value));
    textInputTag.value = "";
    countList();
    doneCountList();
})

allDone.addEventListener("click",()=>{
    const allList = document.querySelectorAll(".list");
    allList.forEach(list=>{
        list.querySelector(".form-check-input").click();
    })
})
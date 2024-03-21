
const app = document.querySelector("#app");
const h1 = document.createElement("h1");
h1.innerText = "Product List";
h1.classList.add("text-primary","bg-primary-subtle","p-4");
h1.title="Product Title";

const table = document.createElement("table");
table.classList.add("table");
app.append(table);

const creNewTd = (content) => {
    const td = document.createElement("td");
    td.innerText = content;
    return td;
}

const creNewTr = (id,name,price) => {
    const tr = document.createElement("tr");
tr.append(creNewTd(id));
tr.append(creNewTd(name));
tr.append(creNewTd(price));

return tr;
}

const thead = document.createElement("thead");
table.append(thead);

const tr1 = document.createElement("tr");
thead.append(tr1);

const td1 = document.createElement("td");
td1.innerText ="#";
tr1.append(td1);
 
const td2 = document.createElement("td");
td2.innerText ="price";
tr1.append(td2);

const td3 = document.createElement("td");
td3.innerText ="name";
tr1.append(td3);

const tbody = document.createElement("tbody");
table.append(tbody);

tbody.append(creNewTr(1,"apple","8000"));
tbody.append(creNewTr(2,"samsung",7000));
tbody.append(creNewTr(3,"mi","3000"));

tr1.append(td2);
app.append(h1);
app.append(table);
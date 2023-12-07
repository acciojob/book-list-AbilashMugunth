let inputTitle = document.querySelector("#title");
let inputAuthor = document.querySelector("#author");
let inputISBN = document.querySelector("#isbn");
let addBookBtn = document.querySelector("#submit");
let tbody = document.querySelector("#book-list");
let form = document.querySelector("form");

addBookBtn.addEventListener("click", () => {
  let tr = document.createElement("tr");

  let titleCell = document.createElement("td");
  titleCell.innerText = inputTitle.value;

  let authorCell = document.createElement("td");
  authorCell.innerText = inputAuthor.value;

  let isbnCell = document.createElement("td");
  isbnCell.innerText = inputISBN.value;

let delBtnCell = document.createElement('td');
  let delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.className = "delete";
  delBtnCell.appendChild(delBtn)

  tr.append(titleCell, authorCell, isbnCell, delBtnCell);
  tbody.appendChild(tr);

  delBtn.addEventListener("click", () => {
    delBtn.parentElement.remove();
  });

  form.reset();
});

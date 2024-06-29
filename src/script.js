let input = document.querySelector("#new-task");
let AddBtn = document.querySelector("#add-task");
let list = document.querySelector(".todo-list");

function create() {
  inputValue = input.value.trim();
  if (inputValue == "") {
    alert("Please Enter Task..");
    return;
  }

  let newlist = document.createElement("li");
  newlist.innerHTML = `
        <div class="list upArrow">  <i class="ri-arrow-up-wide-line icon"></i></div>
    <div class="list downArrow">  <i class="ri-arrow-down-wide-line icon"></i></div>
    <div class="list check">  <i class="ri-checkbox-circle-line icon"></i></div>
    <div class="list task">  <div class="mainText">${inputValue}</div></div>
    <div class="list edit">  <i class="ri-edit-2-fill icon"></i></div>
    <div class="list delete" >  <i class="ri-close-circle-fill icon"></i></div>
    `;

  newlist.classList.add("list");
  list.appendChild(newlist);

  input.value = "";

  newlist.querySelector(".check").addEventListener("click", checkbox);
  newlist.querySelector(".upArrow").addEventListener("click", upshift);
  newlist.querySelector(".downArrow").addEventListener("click", downhift);
  newlist.querySelector(".edit").addEventListener("click", editList);
  newlist.querySelector(".delete").addEventListener("click", deleteList);
}

function editList(event) {
  item = event.target.closest("li");

  let updatetask = document.createElement("input");
  let updatebtn = document.createElement("button");
  updatetask.type = "text";
  updatetask.placeholder = "Update Your Task..";
  updatebtn.innerText = "SAVE";
  updatetask.classList.add("newInput");
  updatebtn.classList.add("UpdateBtn");
  item.appendChild(updatetask);
  item.appendChild(updatebtn);
  updatebtn.addEventListener("click", (e) => {
    let newValue = item.querySelector(".newInput").value.trim();
    if (newValue) {
      item.querySelector(".mainText").innerText = newValue;
      item.removeChild(updatetask);
      item.removeChild(updatebtn);
    } else {
      item.removeChild(updatetask);
      item.removeChild(updatebtn);
      return;
    }
  });
}

function upshift(event) {
  let item = event.target.closest("li");
  let item2 = item.previousElementSibling;
  if (item2 && item2.tagName != "DIV") {
    list.insertBefore(item, item2);
  }
}
function downhift(event) {
  let item = event.target.closest("li");
  let item2 = item.nextElementSibling;
  if (item2) {
    list.insertBefore(item2, item);
  }
}

function checkbox(event) {
  event.target.style.color = "green";
  let item = event.target.closest("li");
  item.querySelector(".edit").removeEventListener("click", editList);
}

function deleteList(event) {
  let item = event.target.closest("li");
  if (item) {
    list.removeChild(item);
  }
}

AddBtn.addEventListener("click", create);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    create();
  }
});

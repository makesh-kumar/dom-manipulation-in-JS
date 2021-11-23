var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", deleteItem);
filter.addEventListener("keyup", filterItems);

document.querySelector("button").style.cursor = "pointer";

// To add item
function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  console.log(newItem);
  if (!newItem.length) {
    alert("Enter some value");
    return;
  }

  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  //delete btn
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

// To delete item
function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure ?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// To filter item
function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

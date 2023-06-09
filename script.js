
function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.innerText);
  }

  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var item = document.createElement("div");
    item.className = "item";
    item.innerText = data;
    event.target.appendChild(item);
    document.getElementById("successMessage").innerText = "Item dropped!";
  }

  function reset() {
    var target = document.querySelector(".target");
    while (target.firstChild) {
      target.removeChild(target.firstChild);
    }
    document.getElementById("successMessage").innerText = "";
  }

  var items = document.querySelectorAll(".item");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("dragstart", drag);
  }
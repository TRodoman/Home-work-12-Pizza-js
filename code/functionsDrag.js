import pizza from "./pizza.js";


const dragItems = document.querySelectorAll(".dragItem");
const dropZones = document.querySelectorAll(".dropZone");
// let pizzaSauce = pizza.sauce;

dragItems.forEach((dragItem) => {
  dragItem.addEventListener("dragstart", handlerDragStart);
});

dropZones.forEach((dropZone) => {
  dropZone.addEventListener("dragenter", handlerDragEnter);
  dropZone.addEventListener("dragover", handlerDragOver);
  dropZone.addEventListener("drop", handlerDrop);
});

function handlerDragStart(event) {
  event.dataTransfer.setData("dragItem", this.dataset.item);
}

function handlerDragEnter(event) {
  event.preventDefault();
}

function handlerDragOver(event) {
  event.preventDefault();
}

function handlerDrop(event) {

  const dragFlag = event.dataTransfer.getData("dragItem");
  const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);


  const totalPrice = document.querySelector("#price");
  let totalSauce = document.querySelector("#sauce");
  const totalTopping = document.querySelector("#topping");

  
  const clone = dragItem.cloneNode(true);
  clone.classList.add("clone");


  if (dragItem.closest(".sauce")) {

    const span2 = document.createElement("span");
    totalSauce.appendChild(span2);
    span2.innerText = dragItem.nextElementSibling.innerHTML;

  } else if (dragItem.closest(".topping")) {
    
    const span1 = document.createElement("span");
    totalTopping.appendChild(span1);
    span1.innerText = dragItem.nextElementSibling.innerHTML;
  }
 
  this.append(clone);
}

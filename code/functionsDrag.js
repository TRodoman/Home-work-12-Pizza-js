

const dragItems = document.querySelectorAll(".dragItem");
const dropZones = document.querySelectorAll(".dropZone");


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

export function handlerDrop(event) {
  const dragFlag = event.dataTransfer.getData("dragItem");
  const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);

  const totalPrice = document.querySelector("#price");
  const totalSauce = document.querySelector("#sauce");
  const totalTopping = document.querySelector("#topping");

  const clone = dragItem.cloneNode(true);
  clone.classList.add("clone");
  const btnsSub = document.querySelector(".btn");
  const btnsClose = document.querySelector(".btn-reset");

  if (dragItem.closest(".sauce")) {
    const span2 = document.createElement("span");
    totalSauce.appendChild(span2);
    span2.innerText = dragItem.nextElementSibling.innerHTML;
  } else if (dragItem.closest(".topping")) {
    const span1 = document.createElement("span");
    totalTopping.appendChild(span1);
    span1.innerText = dragItem.nextElementSibling.innerHTML;
  }

  btnsClose.classList.remove("hide");
  this.append(clone);

  // =======================================================

  function clear() {
    btnsClose.addEventListener("click", () => {
      location.reload();
    });
  }
  clear();
}
// ========================================================
let banner = document.querySelector("#banner");

banner.addEventListener("mouseover", (e) => {
  
  banner.classList.add("banner-start");
  banner.style.left = (e.clientX - 500) + "px";
  banner.style.top = (e.clientY + 100) + "px";
});


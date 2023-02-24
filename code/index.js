import {
  clickInputSize,
  clickSauceAdd,
  clickToppingAdd,
} from "./functionEvent.js";
import{validate} from"./validate.js";

document.getElementById("pizza").addEventListener("click", clickInputSize);

document.querySelectorAll(".topping").forEach((div) => {
  div.addEventListener("dragstart", clickToppingAdd);
});

document.querySelectorAll(".sauce").forEach((div) => {
  div.addEventListener("dragstart", clickSauceAdd);
});

export const pizzaSelectUser = {
  size: "",
  topping: [],
  sauce: "",
  price: 0,
};



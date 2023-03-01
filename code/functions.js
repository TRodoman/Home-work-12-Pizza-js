import { pizzaSelectUser } from "./index.js";
import pizza from "./pizza.js";
// import {handlerDrop} from "./functionsDrag.js";

 
function userSlectTopping(topping) {
    //size = "big"
    if ("smallmidbig".includes(topping)) {
        pizzaSelectUser.size = pizza.size.find((el) => {
            return el.name === topping
        })
    } else if ("moc1moc2moc3telyavetch1vetch2".includes(topping)) {
        pizzaSelectUser.topping.push(pizza.topping.find(el => el.name === topping))
    } else if ("sauceClassicsauceBBQsauceRikotta".includes(topping)) {
        pizzaSelectUser.sauce = pizza.sauce.find(el => el.name === topping)
    }
    pizzaSelectUser.price = show(pizzaSelectUser);
}



function show(pizza) {
    
    let price = 0;
    const totalPrice = document.querySelector("#price");

    if (pizza.sauce !== "") {
        price += pizza.sauce.price;
    }

    if(pizza.topping.length > 0){
        price += pizza.topping.reduce((a,b)=>{
        return a + b.price;
    }, 0)
   
    console.log( pizza.topping);

    }
    if(pizza.size !== ""){
        price += pizza.size.price;
    }
    
    totalPrice.textContent = price;

    console.log(price);
    return price;

}

export { userSlectTopping, show};
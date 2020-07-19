var shoppingList = [ "milk", "eggs", "bread"]
console.log(shoppingList);
// Copy from above list
var shoppingBasket = shoppingList.slice();

// Add new item to new list
shoppingBasket.push("tea");
shoppingBasket.push("coffee");
console.log(shoppingBasket);
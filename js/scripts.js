//Business logic for Pizza Object
function Pizza (size, crust, toppings, sauce) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.sauce = sauce;
}

let pizza1 = new Pizza("small", "thin", ["olives", "ham", "bellpepper", "anchovies", "basil"], "Pesto");

Pizza.prototype.price = function() {
  let cost;
  if (this.size === "small") {
    cost = 12.00;
  } else if (this.size === "medium") {
    cost = 14.00;
  } else {
    cost = 16.00;
  }
  if (this.toppings.length === 3) {
    return cost;
  } else if (this.toppings.length > 3) {
    let addCost = (this.toppings.length - 3) * 1;
    return cost = cost + addCost;
  } else {
    return cost;
  }
};


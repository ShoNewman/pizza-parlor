//Business logic for Pizza Object
function Pizza (size, crust, toppings, sauce) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.sauce = sauce;
}

let pizza1 = new Pizza("large", "thin", ["olives", "ham", "bellpepper"], "Pesto");

Pizza.prototype.price = function() {
  if (this.size === "small") {
    return cost = 12.00;
  } else if (this.size === "medium") {
    return cost = 14.00;
  } else {
    return cost = 16.00;
  }
};


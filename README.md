Describe: function Pizza (size, crust, toppings, sauce) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.sauce = sauce;
}

Test: "It should create a constructor to create pizza objects"
Code:
let pizza1 = new Pizza("large", "thin", ["olives", "ham", "bellpepper"], "Pesto");
Expected Output: 
pizza1 {
  crust: "thin"
  sauce: "Pesto"
  size: "large"
  toppings: (3) ["olives", "ham", "bellpepper", "basil"]
}

Test: "It should create a method to determine the cost of a pizza based on size of pizza"
Code: pizza1.price(); 
Expected Output: 16.00

Test: "It should create a method to increase the cost of a pizza  by $1 for every topping more than 3 that are choosen"
Code: pizza1.price(toppings); 
Expected Output: 17.00
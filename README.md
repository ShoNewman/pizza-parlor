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
Code: pizza1.price(4 toppings); 
Expected Output: 17.00

Test: "It should create a method to adjust the cost of pizza depending on the type of crust chosen "
Code: pizza1.price(thin); 
Expected Output: 16.00

Test: "It will save user input values in variables when the form is submitted"
Code: 
  user input = medium
  user input = thin
  user input = pesto
  user input  = ham, pepperoni
Expected Output: 
  inputtedSize = medium
  inputtedCrust = thin
  inputtedSauce = pesto
  inputtedToppings = ["ham", "pepperoni"]

Test: "It should create a method to display all user inputs in a list"
Code: displayOrder(ordersToDisplay);
Expected Output: Medium, thin, pesto, ham, pepperoni
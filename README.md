# _Pizza Parlor_

#### _Web application where you can order your custom made pizza_

#### By _**Shoshana Newman**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Git and Github_

## Description

_This browser application allows a user to order a custom made pizza by selecting the size, type of crust, type of sauce and a variety of toppings. The price for the pizza is adjusted based on the user's selections._

## Setup/Installation Requirements

* _Navigate to: [Pizza Parlor](https://shonewman.github.io/pizza-parlor/index.html "Pizza Parlor")_
* _To clone and run this application you will need to have [Git](https://git-scm.com/"Git" "Git") installed on your system_
* _Then clone this repository [Repository](https://github.com/ShoNewman/pizza-parlor.git "Repository") to your computer using the following commands in your terminal:_
- Clone repository to your computer:
  - $ git clone https://github.com/ShoNewman/pizza-parlor.git
- Open the index.html in your browser
  - $ open index.html

## Known Bugs

* _There is no validation set up for the form elements, so the user can click the order up button without changing the selections_

## License

_Copyright 2021 Shoshana Newman_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contact Information

_Shoshana Newman [sho.newman@gmail.com](mailto:sho.newman@gmail.com)_

----------------------------------------

Describe: Pizza()
Test: "It should allow new objects to be created from the constructor"
Code:
let pizza1 = new Pizza("large", "traditional", ["olives", "ham", "bellpepper"], "Pesto");
Expected Output: 
pizza1 {
  size: "large",
  crust: "traditional",
  toppings: (3) ["olives", "ham", "bellpepper"],
  sauce: "Pesto"
}

----------------------------------------
Describe: .price()
Test: "It should determine the cost of a pizza based on the size of pizza"
Code: 
let pizza2 = new Pizza("large", "traditional", ["olives", "ham", "bellpepper"], "pesto")
Code: pizza1.price(), 
pizza2.price();
Expected Output: 16.00

Test: "It should increase the cost of a pizza by $1 for every topping more than 3 that are choosen"
Code: 
let pizza3 = new Pizza("large", "traditional", ["olives", "ham", "bellpepper", "chicken"], "pesto");
pizza1.price(); 
Expected Output: 17.00

Test: "It should adjust the cost of the pizza depending on the type of crust chosen "
Code: 
let pizza4 = new Pizza("large", "thin", ["olives", "ham", "bellpepper"], "pesto");
pizza1.price(); 
Expected Output: 14.00
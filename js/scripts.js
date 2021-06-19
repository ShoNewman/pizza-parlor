//Business logic for Pizza Object
function Pizza (size, crust, toppings, sauce) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.sauce = sauce;
}

Pizza.prototype.price = function() {
  let cost;
  if (this.size === "small") {
    cost = 12.00;
  } else if (this.size === "medium") {
    cost = 14.00;
  } else if (this.size === "large") {
    cost = 16.00;
  }
  if (this.toppings.length === 3) {
    cost = cost;
  } else if (this.toppings.length > 3) {
    let addCost = (this.toppings.length - 3) * 1;
    cost = cost + addCost;
  } else {
    cost = cost;
  }
  if (this.crust === "thin") {
    cost = cost - 2;
  } else if (this.crust === "traditional") {
    cost = cost;
  } else if (this.crust === "thick") {
    cost = cost + 2;
  }
  return cost;
};

//User Interface Logic
function displayOrder(ordersToDisplay) {
  let ordersList = $('ul#orders');
  let htmlForOrders = '';

  Object.keys(ordersToDisplay).forEach(function(key) {
    htmlForOrders += '<li class="list-group-item">' + key + ": " + ordersToDisplay[key] + '</li>';
  })
  ordersList.html(htmlForOrders);
}

$(document).ready(function() {
  $('#pizza-order-form').submit(function(event) {
    event.preventDefault();

    let toppingsArray = [];

    const inputtedSize = $('select#size').val();
    const inputtedCrust = $('select#crust').val();
    const inputtedSauce = $('select#sauce').val();
    $('input:checkbox[name=toppings]:checked').each(function() {
      const toppings = $(this).val();
      toppingsArray.push(toppings);
    });
    
    let order = new Pizza (inputtedSize, inputtedCrust, toppingsArray, inputtedSauce); 

    $('#pizza-order-container').show();
    $('#pizza-order-container').html(displayOrder(order));
    $('ul#orders').append('<li class="list-group-item list-group-item-primary">Total Price: $' + order.price().toFixed(2) + '</li>');
  }); 
})
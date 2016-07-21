var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(name) {
  value = (Math.floor(Math.random() * 100));
  cart.push({[name]: value});
  console.log(`${[name]} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var items = [];
    var keys = [];
    var values = [];
    for (var i = 0; i < cart.length; i++) {
      keys.push(Object.keys(cart[i]).toString());
    };
    for (var i = 0; i < keys.length; i++) {
      values.push(cart[i][keys[i]]);
    };
    for (var i = 0; i < cart.length; i++) {
      items.push(`${keys[i]} at $${values[i]}`)
    };
    console.log(`In your cart, you have ${items.join(", ")}` + '.');
  };
};

function removeFromCart(name) {
  var cartkeys = [];
  for (var i = 0; i < cart.length; i++) {
    cartkeys.push(Object.keys(cart[i]).toString());
  };
  for (var i = 0; i < cartkeys.length; i++) {
    if (cartkeys[i] === name) {
      cart.shift(cart[i][name]);
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cc) {
  if (cc === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc.toString()}.`);
    cart = [];
  }
}

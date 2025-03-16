const getStoredCart = () => {
  const alreadyStored = localStorage.getItem("cart");
  if (alreadyStored) {
    return JSON.parse(alreadyStored);
  }
  return [];
};

const saveCartToLS = (cart) => {
  // const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // Save to local storage
  saveCartToLS(cart);
};

export { addToLS, getStoredCart };

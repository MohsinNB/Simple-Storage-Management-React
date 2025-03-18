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
const removefromLs = (id) => {
  const cart = getStoredCart();
  // localStorage.removeItem(id);
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  if (!cart.includes(id)) {
    cart.push(id);
  }

  // Save to local storage
  saveCartToLS(cart);
};

export { addToLS, getStoredCart, removefromLs };

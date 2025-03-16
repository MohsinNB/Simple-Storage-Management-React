const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <h2>Already Explored Country: {cart.length}</h2>
      {cart.map((country) => (
        <img key={country.name.common} src={country.flag} />
      ))}
    </div>
  );
};

export default Cart;

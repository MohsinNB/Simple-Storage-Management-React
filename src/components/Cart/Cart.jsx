import PropTypes from "prop-types";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  console.log(cart);
  return (
    <div>
      <h2>Already Explored Country: {cart.length}</h2>
      <div className="cart-container">
        {cart.map((country) => (
          <div key={country.name.common}>
            <img className="image" src={country.flag} />
            <button
              className="btn"
              onClick={() => {
                handleRemoveFromCart(country.name.common);
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};
export default Cart;

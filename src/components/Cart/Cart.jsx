import PropTypes from "prop-types";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <h2>Already Explored Country: {cart.length}</h2>
      <div className="cart-container">
        {cart.map((country) => (
          <img key={country.name.common} src={country.flag} />
        ))}
      </div>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};
export default Cart;

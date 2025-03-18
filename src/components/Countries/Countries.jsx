import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { addToLS, getStoredCart, removefromLs } from "../localStorage";
import Cart from "../Cart/Cart";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("Countries.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  // Load country from local storage cart

  useEffect(() => {
    // console.log(countries.length);
    if (countries.length > 0) {
      const storedCart = getStoredCart();
      // console.log(storedCart);
      const cartCountries = [];
      for (const id of storedCart) {
        const cartedCountry = countries.find(
          (country) => country.name.common === id
        );
        // cartCountries.push(cartedCountry);
        if (!cartCountries.includes(cartedCountry)) {
          cartCountries.push(cartedCountry);
        }
      }
      setCart(cartCountries);
    }
  }, [countries]);

  const handleAddToList = (country) => {
    // console.log(country);
    if (!cart.includes(country)) {
      const newCart = [...cart, country];
      setCart(newCart);
    }

    addToLS(country.name.common);
  };
  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((country) => country.name.common !== id);
    setCart(remainingCart);
    removefromLs(id);
  };
  return (
    <div>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

      <h2>All Countries are here</h2>
      <div className="country-container">
        {countries.map((country) => (
          // console.log(country),
          <Country
            handleAddToList={handleAddToList}
            key={country.population}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

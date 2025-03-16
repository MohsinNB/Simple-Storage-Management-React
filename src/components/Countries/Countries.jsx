import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { addToLS, getStoredCart } from "../localStorage";

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
        cartCountries.push(cartedCountry);
      }
      setCart(cartCountries);
    }
  }, [countries]);

  const handleAddToList = (country) => {
    console.log(country);
    const newCart = [...cart, country];
    setCart(newCart);
    addToLS(country.name.common);
  };
  return (
    <div>
      <h2>Countries are here</h2>
      <h3>Already Explored country: {cart.length}</h3>
      <ul>
        {cart.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
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

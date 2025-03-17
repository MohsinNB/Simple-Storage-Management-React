import { useState } from "react";
import "./Country.css";
import PropTypes from "prop-types";

const Country = ({ country, handleAddToList }) => {
  const { name, flag } = country;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    handleAddToList(country);
    setIsClicked(true);
  };

  return (
    <div>
      <div className="Country">
        <img src={flag} alt="" />

        <h4>{name.common}</h4>
        <button onClick={handleClick} disabled={isClicked}>
          {isClicked ? "Explored" : "Explore"}
        </button>
      </div>
    </div>
  );
};
Country.propTypes = {
  country: PropTypes.array.isRequired,
  handleAddToList: PropTypes.func.isRequired,
};
export default Country;

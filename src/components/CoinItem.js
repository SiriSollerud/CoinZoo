import React from "react";
import "./Coins.css";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import {animals} from "./AnimalNames"

function checkAnimalName(coin) {
  for (var i = 0; i != animals.length; i++) {
    if (coin.includes(animals[i])) {
      console.log(coin)
      return true;
    }
  }
  return false;
}

const CoinItem = (props) => {
  let coinName = props.coins.name.toLowerCase();
  let checkAnimal = checkAnimalName(coinName)
  
  if (checkAnimal)

  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-coin-logo">
        <img src={props.coins.image} alt="coin logo" />
        {<p>{props.coins.symbol.toUpperCase()}</p>}
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>
        {props.coins.price_change_percentage_24h.toFixed(2) < 0 ? (
          <span className="red">
            <FiArrowDown />
            {props.coins.price_change_percentage_24h.toFixed(2)}%
          </span>
        ) : (
          <span className="green">
            <FiArrowUp />
            {props.coins.price_change_percentage_24h.toFixed(2)}%
          </span>
        )}
      </p>
      <p className="hide-mobile">
        ${props.coins.total_volume.toLocaleString()}
      </p>
      <p className="hide-mobile">${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;

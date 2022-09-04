import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>

        {props.coins.map((coins) => {
          return <CoinItem coins={coins} key={coins.id} />;
        })}
      </div>
    </div>
  );
};

export default Coins;

import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";

const Coins = (props) => {
  return (
    <div className="container">
      {props.coins.map((coins) => {
        return <CoinItem coins={coins} key={coins.id} />;
      })}
    </div>
  );
};

export default Coins;

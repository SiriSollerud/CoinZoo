import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";

function App() {
  const [coins, setCoinsPage1] = useState([]);
  const [coins2, setCoinsPage2] = useState([]);
  const [coins3, setCoinsPage3] = useState([]);
  const [coins4, setCoinsPage4] = useState([]);

  const getCoinGeckoData = () => {
    // CoinGecko api only displays 250 coins per page
    // Therefore, in order to get more coins I need several API calls
    // As of now 1000 coins total are fetched
    let endpoints = [
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false",
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2&sparkline=false",
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=3&sparkline=false",
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=4&sparkline=false",
    ];

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(([{ data: page1 }, { data: page2 }, { data: page3 }, { data: page4 }]) => {
        setCoinsPage1(page1);
        setCoinsPage2(page2);
        setCoinsPage3(page3);
        setCoinsPage4(page4);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCoinGeckoData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="heading">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>
      </div>

      {/* TODO: Wish I knew how to add all the api data in one array, and then only have <Coins coins={coins} /> once*/}
      <Coins coins={coins} />
      <Coins coins={coins2} />
      <Coins coins={coins3} />
      <Coins coins={coins4} />
    </>
  );
}

export default App;

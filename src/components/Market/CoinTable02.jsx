import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { CoinListDays } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import TableData from "./TableData";
import { LinearProgress } from "@mui/material";
import market from "../../assets/market.png";
import "./Table.css";

const CoinTable02 = () => {
  const [coins, setCoins] = useState([]);
  const { currency, symbol } = CryptoState();
  const [loading, setLoading] = useState(false);

  const [searchText, setSearchText] = useState("");

  const fetchCoins = async () => {
    setLoading(true);

    const { data } = await axios.get(CoinListDays(currency));

    setCoins(data);
    setLoading(false);
  };

  const debounce = function (func) {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 600);
    };
  };

  const handleFun = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const optimiseFun = useCallback(debounce(handleFun), []);
  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <div id="marketCap">
      <img src={market} alt="" />
      <div className="MarketCapHead">
        <h4 className="TableHeading footerHeading">Search Crypto Coin</h4>
        <form>
          <input
            onKeyUp={optimiseFun}
            className="searchInput"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>
      <div className="TableHolder">
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <table className="Table">
            <thead className="tableHead">
              <tr className="border-b">
                <th className="sno">#</th>
                <th>Coin</th>

                <th>Price</th>
                <th>1h %</th>
                <th>24h %</th>
                <th>7d %</th>
                <th className="">Volume(24h)</th>
                <th className="">Market Cap</th>
                <th className="">Circulating Supply</th>
                <th>Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {coins
                .filter((value) => {
                  if (searchText === "") {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(searchText.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((coin) => (
                  <TableData key={coin.id} coin={coin} />
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CoinTable02;

import React from "react";

import { Sparklines, SparklinesLine } from "react-sparklines";
import { CryptoState } from "../../CryptoContext";
const TableData = ({ coin }) => {
  const { currency, symbol } = CryptoState();
  // console.log(coin);
  return (
    <>
      <tr className="row">
        <td className="rank">{coin.market_cap_rank}</td>
        <td className="divName">
          <a
            href={`https://coinmarketcap.com/currencies/${coin.id}/`}
            target="blank"
          >
            <div className="coinName">
              <img className="coinImg" src={coin.image} alt={coin.id} />
              <p>{coin.name}</p>
              <b className="symbol">({coin.symbol.toUpperCase()})</b>
            </div>
          </a>
        </td>

        <td className="small">
          {symbol.toUpperCase()}
          {coin.current_price.toLocaleString()}
        </td>
        <td className="small">
          {coin.price_change_percentage_1h_in_currency > 0 ? (
            <p className="text-green">
              {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
            </p>
          ) : (
            <p className="text-red">
              {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
            </p>
          )}
        </td>
        <td className="small">
          {coin.price_change_percentage_24h > 0 ? (
            <p className="text-green">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="text-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
        </td>
        <td className="small">
          {coin.price_change_percentage_7d_in_currency > 0 ? (
            <p className="text-green">
              {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
            </p>
          ) : (
            <p className="text-red">
              {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
            </p>
          )}
        </td>
        <td>
          {symbol + " "}
          {coin.total_volume.toLocaleString()}
        </td>
        <td>
          {symbol + " "}
          {coin.market_cap.toLocaleString()}
        </td>
        <td>{coin.circulating_supply.toLocaleString()}</td>
        <td className="sparkline">
          {coin.price_change_percentage_7d_in_currency > 0 ? (
            <Sparklines data={coin.sparkline_in_7d.price}>
              <SparklinesLine color="green" />
            </Sparklines>
          ) : (
            <Sparklines data={coin.sparkline_in_7d.price}>
              <SparklinesLine color="red" />
            </Sparklines>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableData;

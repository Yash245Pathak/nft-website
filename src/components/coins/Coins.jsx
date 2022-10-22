import React from "react";
import "./Coins.css";
import { CoinsInfo } from "../../data/CoinsInfo";

const Coins = () => {
  return (
    <>
      <div className="coins-main">
        {CoinsInfo.map((ci) => {
          return (
            <div className="coins" key={ci.id}>
              <img src={ci.logo} alt="" />
              <span>{ci.name}</span>
            </div>
          );
        })}
      </div>
      <div className="coins-text">
        <h1>Find Trading NFT Items</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.</p>
      </div>
    </>
  );
};

export default Coins;

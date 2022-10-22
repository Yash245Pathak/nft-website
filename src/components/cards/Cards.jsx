import React from "react";
import { cartoonCards } from "../../data/cartoonCards";
import "./Cards.css";
import blueTick from "../../images/blueTick.png";

const Cards = () => {
  return (
    <>
      <div className="container">
        {cartoonCards.map((cc) => {
          return (
            <div className="card" key={cc.id}>
              <div className="card-image">
                <img src={cc.image} alt="" />
              </div>
              <div>
                <div className="card-main">
                  <div className="left">
                    <span>{cc.name}</span>
                    <div>
                      <span>{cc.no}</span>
                      <img src={blueTick} alt="" />
                    </div>
                  </div>
                  <div className="right">{cc.cost}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text">
        <div className="text-card">
          <h2>34.16 ETH</h2>
          <span>Random Name</span>
        </div>
        <div className="text-card">
          <h2>23.66 ETH</h2>
          <span>Random Name</span>
        </div>
        <div className="text-card">
          <h2>324.56 ETH</h2>
          <span>Random Name</span>
        </div>
      </div>
    </>
  );
};

export default Cards;

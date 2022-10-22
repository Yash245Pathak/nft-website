import React from "react";
import { carosuel_card } from "../../data/carousel-card";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="image-carousel">
      <div className="carousel-main">
        {carosuel_card.map((i) => {
          return (
            <div className="carousel" key={i.id}>
              <img src={i.image} alt="" />
            </div>
          );
        })}
      </div>
      <button className="btn glow-on-hover">
        Connect Wallet
      </button>
    </div>
  );
};

export default Carousel;

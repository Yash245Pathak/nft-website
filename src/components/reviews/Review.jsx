import React from 'react'
import "./Review.css"
import { cartoonCards } from "../../data/cartoonCards";

const Review = () => {
  return (
    <div>
        <div className="review-container">
        {cartoonCards.map((cc) => {
          return (
            <div className="review-card" key={cc.id}>
              <div>
              <div className="review-card-image">
                <img src={cc.image} alt="" />
              </div>
                <span id='me'>#15626</span>
                <div className="review-card-main">
                  <div className="left1">
                    <span>{cc.name}</span>
                    <div>
                      <span>{cc.no}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Review
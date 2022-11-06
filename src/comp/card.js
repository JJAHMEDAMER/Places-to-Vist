import React from "react";

const Card = () => (
  <div className="card">
    <img src="https://images.unsplash.com/photo-1519962551779-514fa155be9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" className="card--img" alt="location img" />
    <div className="card--text">
      <div className="card--info">
        <h1 className="card--title">Header</h1>
        <p className="card--price">price</p>
      </div>
      <p className="card--desc">lorum </p>
      <button className="card--button">Not Interisted</button>
    </div>
  </div>
);

export default Card;

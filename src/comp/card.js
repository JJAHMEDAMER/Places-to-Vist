import React from "react";

const Card = (props) => (
  <div className="card">
    <img src={props.image} className="card--img" alt="location img" />
    <div className="card--text">
      <div className="card--info">
        <h1 className="card--title">{props.name}</h1>
        <p className="card--price">$ {props.price}</p>
      </div>
      <p className="card--desc">{props.info}</p>
      <button
        className="card--button"
        onClick={() => props.onClickHandler(props.id)}
      >
        Not Interested
      </button>
    </div>
  </div>
);

export default Card;

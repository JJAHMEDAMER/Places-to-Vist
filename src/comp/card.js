import React from "react";

const Card = (props) => {
  const [readMore, setReadMore] = React.useState(false);
  function readMoreButton() {
    setReadMore(!readMore);
  }
  return (
    <div className="card">
      <img src={props.image} className="card--img" alt="location img" />
      <div className="card--text">
        <div className="card--info">
          <h1 className="card--title">{props.name}</h1>
          <p className="card--price">$ {props.price}</p>
        </div>
        <p className="card--desc">
          {readMore ? props.info : `${props.info.substring(0, 200)}...`}
          <button className="card--read--more--button" onClick={readMoreButton}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="card--button"
          onClick={() => props.onClickHandler(props.id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Card;

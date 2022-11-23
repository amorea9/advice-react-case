import React from "react";

function Results(props) {
  return (
    <div>
      <h1>Your order is ready!</h1>
      <div>cookie svg here</div>
      <p>
        Your daily google searches are equivalent to <span>{props.calculation}</span> cookies
      </p>
      <button onClick={props.getMore}>How do we know?</button>
      <button onClick={props.getOrder}>Bake again</button>
    </div>
  );
}

export default Results;

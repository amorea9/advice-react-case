import React from "react";

function KnowMore() {
  return (
    <div className="UI-container">
      <h1>How do we know?</h1>
      <p>It takes about (1.38)g of CO2 to produce a cookie. Each google search emits about (0.2)g of CO2.</p>
      {/* <p>In the algorithm used, C stands for the CO2 that the production of a single cookie emits and S is the number of searches:</p> */}
      <p>In the algorithm used, "Cookies" stands for the number of cookies and "Search" is the number of searches that you've submitted :</p>
      <blockquote> Cookies = (Searches * 0.2g) / 1.38g </blockquote>
      <button onClick={props.getLanding}>Home</button>
    </div>
  );
}

export default KnowMore;

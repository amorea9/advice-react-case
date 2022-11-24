import React from "react";

function KnowMore(props) {
  return (
    <div className="UI-container">
      <div className="text_wrapper">
        <h1>How do we know?</h1>
        <p>
          It takes about <strong>1.38g</strong> of CO2 to produce a cookie. Each google search emits about <strong>0.2g</strong> of CO2.
        </p>

        <p>
          Read more about google search emissions <a href="https://qz.com/1267709/every-google-search-results-in-co2-emissions-this-real-time-dataviz-shows-how-much">here</a>, and about emissions from cookie and biscuit productions{" "}
          <a href="https://www.biscuitpeople.com/magazine/post/The-Biscuit-Industry-Carbon-Footprint">here</a>.
        </p>
        <p>In the algorithm used, "Cookies" stands for the number of cookies and "Search" is the number of searches that you've submitted:</p>
        <blockquote> Cookies = (Searches * 0.2g) / 1.38g </blockquote>
      </div>
      <div className="buttons_wrapper">
        <button onClick={props.getLanding}>Home</button>
      </div>
    </div>
  );
}

export default KnowMore;

import React from "react";

function Landing(props) {
  return (
    <div className="UI-container">
      <div className="text_wrapper">
        <h1>Welcome</h1>
        <h2>We bake cookies from your daily digital CO2 emissions.</h2>
        <p>You tell us about your digital behaviour and we calculate your carbon footprint in a format everyone understands.</p>
        <p>Because who doesn't like cookies?</p>
        <h3>Go on, give it a go!</h3>
      </div>
      <div className="buttons_wrapper">
        <button onClick={props.getOrder}>Start</button>
      </div>
    </div>
  );
}

export default Landing;

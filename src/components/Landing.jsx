import React from "react";

function Landing(props) {
  return (
    <div className="UI-container">
      <h1>Welcome</h1>
      <p>Google accounts for about 40% of the internet's carbon footprint.</p>
      <p>But what does that actually mean?</p>
      <p>We'll bake you cookies based on your google search emissions to give you an idea of it.</p>
      <button onClick={props.getOrder}>Start</button>
    </div>
  );
}

export default Landing;

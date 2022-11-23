import React from "react";

function Order(props) {
  function submit(e) {
    e.preventDefault();
  }
  return (
    <div className="UI-container">
      <h1>Make your order</h1>

      <form onSubmit={submit} className="form">
        <div className="searches_wrapper">
          <label htmlFor="google-searches">
            <h2>How many google searches do you make a day?</h2>
          </label>
          <input type="number" name="google-searches" placeholder="0" required></input>
        </div>
        <div className="radio_wrapper">
          <legend>
            <h2>Choose your flavour:</h2>
          </legend>
          <div className="radio_options">
            <label htmlFor="chocolate_cookie">
              <input type="radio" name="cookie_flavor" value="chocolate" id="chocolate_cookie" defaultChecked />
              Chocolate
            </label>
            <label htmlFor="vanilla_cookie">
              <input type="radio" name="cookie_flavor" value="vanilla" id="vanilla_cookie" />
              Vanilla
            </label>
          </div>
        </div>
        <div className="buttons_wrapper">
          <button type="submit" onClick={props.getResults}>
            Bake
          </button>
          <input type="reset" />
        </div>
      </form>
    </div>
  );
}

export default Order;

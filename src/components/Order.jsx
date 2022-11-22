import React from "react";

function Order(props) {
  function submit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Submit your order</h1>

      <form onSubmit={submit} className="form">
        <div className="searches_wrapper">
          <label htmlFor="google-searches">How many google searches do you make a day?</label>
          <input type="number" name="google-searches" placeholder="3" required></input>
        </div>
        <div className="radio_wrapper">
          <legend>Choose your flavour:</legend>
          <label htmlFor="chocolate_cookie">
            <input type="radio" name="cookie_flavor" value="chocolate" id="chocolate_cookie" defaultChecked />
            Chocolate
          </label>

          <label htmlFor="vanilla_cookie">
            <input type="radio" name="cookie_flavor" value="vanilla" id="vanilla_cookie" />
            Vanilla
          </label>
        </div>

        <button type="submit" onClick={props.getResults}>
          Bake
        </button>
        <input type="reset" />
      </form>
    </div>
  );
}

export default Order;

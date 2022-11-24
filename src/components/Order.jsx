function Order(props) {
  function submit(e) {
    //this is only is we decide to send data to a database
    e.preventDefault();
  }

  return (
    <div className="UI-container">
      <h1>Make your order</h1>

      <form onSubmit={submit} className="form">
        <div className="searches_wrapper">
          <label htmlFor="google-searches">How many google searches do you make a day?</label>
          <input type="number" name="google-searches" onChange={props.searchChanged} placeholder={props.search} required></input>
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

        <input type="submit" value="bake" onClick={props.getResults} />
      </form>
    </div>
  );
}

export default Order;

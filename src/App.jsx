import { useState } from "react";
import Landing from "./components/Landing";
import "./App.scss";
import Order from "./components/Order";
import Results from "./components/Results";
import KnowMore from "./components/KnowMore";
import logo from "./assets/cookie-bakery_logo.png";

function App() {
  const pages = { landing: "page1", order: "page2", results: "page3", more: "page4" };
  const [page, setPage] = useState(pages.landing);

  function getOrder(page) {
    console.log("change page");
    setPage((page) => (page = pages.order));
  }

  function getResults(page) {
    //startLoadingAnimation();
    //on animation end, set page or animation end
    //calculate results at the same time
    console.log("change page");
    //use effect for setTimeOut
    setPage((page) => (page = pages.results));
  }
  function getMore(page) {
    console.log("get more");
    setPage((page) => (page = pages.more));
  }
  return (
    <>
      <a className="logo" href="index.html">
        <img src={logo} alt="Cookie Bakery Logo" />
      </a>
      {page === "page1" ? <Landing getOrder={getOrder} page={page} /> : null}
      {page === "page2" ? <Order getResults={getResults} page={page} /> : null}
      {page === "page3" ? <Results getMore={getMore} getOrder={getOrder} page={page} /> : null}
      {page === "page4" ? <KnowMore getMore={getMore} page={page} /> : null}
    </>
  );
}

export default App;

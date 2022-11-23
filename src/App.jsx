import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import "./App.css";
import Order from "./components/Order";
import Results from "./components/Results";
import KnowMore from "./components/KnowMore";
import Loading from "./components/Loading";

function App() {
  const pages = { landing: "page1", order: "page2", results: "page3", more: "page4", loading: "page5" };
  const [page, setPage] = useState(pages.landing);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("5");
  const [calculation, setCalculation] = useState(0);

  //use Effect triggered when the loading starts
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        console.log("second time out");
        setLoading(false);
        setPage((page) => (page = pages.results));
      }, 3000);
    }
  }, [loading]);

  const searchChanged = (e) => {
    setSearch(e.target.value);
    calculate(e.target.value);
    console.log("from searchChanged", e.target.value);
  };
  function calculate(search) {
    setCalculation((calculation) => (calculation = (Number(search) * 1.38) / 0.2));
    return calculation;
  }

  function getOrder(page) {
    console.log("change page");
    setPage((page) => (page = pages.order));
  }

  function getResults(page) {
    //startLoadingAnimation();
    setPage((page) => (page = pages.loading));
    //changing the state of the loading to true
    setLoading(true);

    //calculate results at the same time
  }

  function getMore(page) {
    console.log("get more");
    setPage((page) => (page = pages.more));
  }

  //conditionally rendering the pages below via components
  return (
    <>
      <a href="index.html"> Title here </a>
      {page === "page1" ? <Landing getOrder={getOrder} page={page} /> : null}
      {page === "page2" ? <Order search={search} setSearch={setSearch} searchChanged={searchChanged} getResults={getResults} page={page} /> : null}
      {page === "page3" ? <Results calculation={calculation} getMore={getMore} getOrder={getOrder} page={page} /> : null}
      {page === "page4" ? <KnowMore getMore={getMore} page={page} /> : null}
      {page === "page5" ? <Loading page={page} /> : null}
    </>
  );
}

export default App;

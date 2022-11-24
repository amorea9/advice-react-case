import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import "./App.scss";
import Order from "./components/Order";
import Results from "./components/Results";
import KnowMore from "./components/KnowMore";
import logo from "./assets/cookie-bakery_logo.png";
import Loading from "./components/Loading";

function App() {
  const pages = { landing: "page1", order: "page2", results: "page3", more: "page4", loading: "page5" };
  const [page, setPage] = useState(pages.landing);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("5");
  const [calculation, setCalculation] = useState(0);
  const [choiceOfFlavour, setChoiceOfFlavour] = useState("");
  const [results, setResults] = useState({ calculationQuantity: 0, flavour: "" });

  //use Effect triggered when the loading starts
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        setPage((page) => (page = pages.results));
      }, 3000);
    }
  }, [loading]);

  //when number of searches changes, do this
  const searchChanged = (e) => {
    setSearch(e.target.value);
    calculate(e.target.value);
    console.log("from searchChanged", e.target.value);
  };

  //when flavour changes, do this
  const chooseFlavour = (e) => {
    setChoiceOfFlavour(e.target.value);
    console.log("from choice of flavour", e.target.value);
  };
  function calculate(search) {
    setCalculation((calculation) => (calculation = parseInt((Number(search) * 0.2) / 1.38)));
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
    //calculate final results
    getFinalResults(calculation, choiceOfFlavour);
  }
  function getFinalResults(calculation, choiceOfFlavour) {
    //calculates the results object with quantity of cookies and flavour
    setResults((results) => (results = { calculationQuantity: calculation, flavour: choiceOfFlavour }));
  }

  function getMore(page) {
    console.log("get more");
    setPage((page) => (page = pages.more));
  }

  function getLanding(page) {
    setPage((page) => (page = pages.landing));
  }

  //conditionally rendering the pages below via components
  return (
    <>
      <a className="logo" href="index.html">
        <img src={logo} alt="Cookie Bakery Logo" />
      </a>
      {page === "page1" ? <Landing getOrder={getOrder} page={page} /> : null}
      {page === "page2" ? <Order search={search} setSearch={setSearch} searchChanged={searchChanged} chooseFlavour={chooseFlavour} getResults={getResults} page={page} /> : null}
      {page === "page3" ? <Results results={results} calculation={calculation} getMore={getMore} getOrder={getOrder} page={page} /> : null}
      {page === "page4" ? <KnowMore getLanding={getLanding} getMore={getMore} page={page} /> : null}
      {page === "page5" ? <Loading page={page} /> : null}
    </>
  );
}

export default App;

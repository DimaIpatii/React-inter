
import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParam = lazy(() => import('./SearchParam'));

const App = () => {
  var themeHook = useState({
    buttonColor: "darkblue",
    textColor: "white",
  });
  
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">
              <h1 id="something-important">Adopt me!</h1>
            </Link>
          </header>
          <Suspense fallback={<h1>loading route …</h1>}>
            <Router>
              <SearchParam path="/" />
              <Details path="/details/:id" />
            </Router>
        </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(
  <App />, // What to render...
  document.getElementById("root") // Where to render...
);

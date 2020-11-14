
import React, { useState, Suspense } from "react";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

import Details from './Details';
import SearchParam from './SearchParam';
/* const Details = React.lazy(() => import("./Details"));
const SearchParam = React.lazy(() => import('./SearchParam')); */

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
          {/* <Suspense fallback={<h1>loading route …</h1>}> */}
            <Router>
              <SearchParam path="/" />
              <Details path="/details/:id" />
            </Router>
        {/* </Suspense> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// To import into the Nede:
export default App;
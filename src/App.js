import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../src/styles/tailwind.css";
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";

const App = () => {
  return (
    <>
      <Router>
        <div className="bg-white px-8 pt-2 shadow-md">
          <div className=" flex justify-center items-center">
            <Link
              className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
              to=""
            >
              Home
            </Link>
            <Link
              className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
              to="/films"
            >
              Films
            </Link>
            <Link
              className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
              to="/people"
            >
              People
            </Link>
          </div>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/people" component={People} />
      </Router>
    </>
  );
};

export default App;

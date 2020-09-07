import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "../src/styles/tailwind.css";
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/people" component={People} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

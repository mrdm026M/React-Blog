import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../src/pages/Home/Home.js";
import { Recent } from "./pages/Recent/Recent.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recent" component={Recent} />
      </Switch>
    </Router>
  );
};

export default App;

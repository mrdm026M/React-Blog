import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home/Home.js";
import ScrollToTop from "./components/StyledComponent/ScrollToTop";
import BlogPage from "./pages/BlogPage/BlogPage.js";
import NewBlog from "./pages/NewBlog/NewBlog.js";
import Recent from "./pages/Recent/Recent.js";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recent" component={Recent} />
        <Route exact path="/blog/:id/:title" component={BlogPage} />
        <Route exact path="/newblog" component={NewBlog} />
      </Switch>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home/Home.js";
import ScrollToTop from "./components/StyledComponent/ScrollToTop";
import BlogPage from "./pages/BlogPage/BlogPage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import NewBlog from "./pages/NewBlog/NewBlog.js";
import Recent from "./pages/Recent/Recent.js";
import { Provider } from "react-redux";
import { getReduxStore, getRrfProp } from "./Config/Fire-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const App = () => {
  return (
    <div className="app">
      <Provider store={getReduxStore()}>
        <ReactReduxFirebaseProvider {...getRrfProp()}>
          <Router>
            <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/recent" component={Recent} />
              <Route exact path="/blog/:id/:title" component={BlogPage} />
              <Route exact path="/newblog" component={NewBlog} />
              <Route exact path="/login" component={LoginPage} />
            </Switch>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </div>
  );
};

export default App;

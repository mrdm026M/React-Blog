import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/StyledComponent/ScrollToTop";
import { Provider } from "react-redux";
import { getReduxStore, getRrfProp } from "./Config/Fire-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import RouterManager from "./RouterManager/RouterManager";

const App = () => {
  return (
    <div className="app">
      <Provider store={getReduxStore()}>
        <ReactReduxFirebaseProvider {...getRrfProp()}>
          <Router>
            <ScrollToTop />
            <RouterManager />
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </div>
  );
};

export default App;

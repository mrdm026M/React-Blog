import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import BlogPage from "../pages/BlogPage/BlogPage.js";
import LoginPage from "../pages/LoginPage/LoginPage.js";
import NewBlog from "../pages/NewBlog/NewBlog.js";
import Recent from "../pages/Recent/Recent.js";
import Home from "../pages/Home/Home";
import { connect } from "react-redux";
import firebase from "firebase";

const AdminOnly = (ComposedComponent, auth) => {
  class AdminOnly extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isPass: false,
      };
    }

    componentWillMount() {
      if (!auth.isEmpty) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((idTokenResult) => {
            if (idTokenResult.claims.type === "administrator") {
              this.setState({
                isPass: true,
              });
            } else {
              this.props.history.push("/login");
            }
          });
      } else {
        this.props.history.push("/login");
      }
    }

    render() {
      if (this.state.isPass) {
        return (
          <ComposedComponent
            location={this.props.location}
            history={this.props.history}
            auth={auth}
          />
        );
      } else {
        return <div>Checking...</div>;
      }
    }
  }
  return AdminOnly;
};

class RouterManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.auth);
    return (
      <div>
        {this.props.auth.isLoaded ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recent" component={Recent} />
            {/* <Route exact path="/newblog" component={NewBlog} /> */}
            <Route exact path="/blog/:id/:title" component={BlogPage} />
            <Route
              exact
              path="/newblog"
              component={AdminOnly(NewBlog, this.props.auth)}
            />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile,
}));

export default enhance(withRouter(RouterManager));

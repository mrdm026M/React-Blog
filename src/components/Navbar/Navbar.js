import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {} from "./Navbar.scss";
import { connect } from "react-redux";
import fire from "../../Config/Fire";
// import { Button } from "react-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (!nextProps.auth.isEmpty) {
      fire
        .auth()
        .currentUser.getIdTokenResult()
        .then((claim) => {
          console.log(claim.claims);
        });
    }
  }

  render() {
    return (
      <div className="navbar__section">
        <header className="page-navbar">
          <div className="page-navbar__content">
            <div className="nav-logo">
              <NavLink to="/">TTP.</NavLink>
            </div>
            <nav className="nav">
              <ul className="nav-list">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/recent">Recent</NavLink>
                </li>
                {this.props.auth.isEmpty ? null : (
                  <li>
                    <NavLink to="/newblog">New Blog</NavLink>
                  </li>
                )}
                {this.props.auth.isEmpty ? null : (
                  <li>
                    <NavLink to="/" onClick={() => fire.auth().signOut()}>
                      LogOut
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile,
}));

export default enhance(Navbar);

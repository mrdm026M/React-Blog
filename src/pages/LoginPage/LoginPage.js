import React, { Component } from "react";
import "./LoginPage.scss";
import { StyledFirebaseAuth } from "react-firebaseui";
import fire from "../../Config/Fire";
import { connect } from "react-redux";
// import { auth } from "firebaseui";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [fire.auth.GoogleAuthProvider.PROVIDER_ID],
};

class LoginPage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="loginPage__container">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
      </div>
    );
  }
}

const enhance = connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile,
}));

export default enhance(LoginPage);

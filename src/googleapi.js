import React, { Component } from "react";

class GoogleApi extends Component {
  state = {
    isSignedIn: null
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "493234110994-00d6o70b700cachgllfkahsksmqam01i.apps.googleusercontent.com",
          scope: "userinfo.email"
        })
        .then((res) => {
          console.log(res);
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  };
  renderedAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return <div>I don't know signedIn</div>;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button">
          <i className="facebook icon" />
          SignOut
        </button>
      );
    } else {
      return <div>You are not signed In</div>;
    }
  };
  render() {
    return <h1>{this.renderedAuthButton()}</h1>;
  }
}

export default GoogleApi;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import StreamList from "./Components/Stream/StreamList";
import StreamShow from "./Components/Stream/StreamShow";
import StreamDelete from "./Components/Stream/StreamDelete";
import StreamEdit from "./Components/Stream/StreamEdit";
import StreamCreate from "./Components/Stream/StreamCreate";
import Header from "./Header";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/Stream/show" exact component={StreamShow} />
            <Route path="/Stream/delete" exact component={StreamDelete} />
            <Route path="/Stream/edit" exact component={StreamEdit} />
            <Route path="/Stream/new" exact component={StreamCreate} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;

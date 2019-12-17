import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Località from "./components/Località/Località";
import Login from "./components/Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Route>
        <Route exact path="/main" render={routerProps => <Main></Main>} />
        <Route
          exact
          path="/località"
          render={routerProps => <Località></Località>}
        />
        <Route exact path="/" render={routerProps => <Login></Login>} />
      </Route>
    );
  }
}

export default App;

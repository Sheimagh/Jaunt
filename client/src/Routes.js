import React from "react";
import { Route, Switch } from "react-router-dom";

import home from "./pages/home";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={home} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;

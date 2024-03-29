import React from "react";
import logo from "./logo.svg";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/notfound" component={NotFound} />
      <Route>
        <Redirect to="/notfound"></Redirect>
      </Route>
    </Switch>
  );
}

export default App;

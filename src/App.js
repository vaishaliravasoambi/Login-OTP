import React from "react";
import "./styles.css";
import Login from "./Components/Login/Login";
import Otp from "./Components/Otp/Otp";
import Success from "./Components/Otp/Success";
import Invalid from "./Components/Otp/Invalid";

import { Route, Link, Switch } from "react-router-dom";
export default function App() {
  return (
    <>
      <div className="App">
        <Switch>
          if(number===undefined)
          {<Route path="/" exact component={Login} />}
          <Route path="/otp" component={Otp} />
          <Route path="/" exact component={Login} />
          <Route path="/Success" component={Success} />
          <Route path="/Invalid" component={Invalid} />
        </Switch>
      </div>
    </>
  );
}

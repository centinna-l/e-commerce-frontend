import React from "react";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Home from "./core/Home";
import SignUp from "../src/user/Signup";
import SignIn from "../src/user/Signin";


const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;

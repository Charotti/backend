import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// const axios = require("axios");
import Admin from "./pages/Admin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/signUp">SignUp</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

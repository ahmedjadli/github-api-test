import React from "react";
import MainPage from "./containers/Main";
import SignUpPage from "./containers/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginPage from "./containers/LogIn";
import Navbar from "./components/navbar";

export const App = () => {
  let user = useSelector((state) => state.user.user);

  return (
    <Router>
      {user.isLoggedIn && <Navbar user={user} />}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default App;

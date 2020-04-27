import React from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (


    <BrowserRouter>
      <div className="home contaner">



        <Switch>
          <Route exact path="/" component={SignIn} />

          <Route path="/signin" component={SignIn} />

          <Route path="/signup" component={SignUp} />


          <Route path="/profile" component={Profile} />

        </Switch>
      </div>
    </BrowserRouter>

  );
};
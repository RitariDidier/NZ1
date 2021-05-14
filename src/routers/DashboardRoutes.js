import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import TakeChallenge from "../components/takeChallenges/TakeChallenge";

const DashboardRoutes = () => {
  return (
    <>
      {/* navbar */}
      {/*       <h2>Here is the NavBar</h2> */}
      <div>
        <Switch>
          <Route exact path="/takeChallenge" component={TakeChallenge} />
          <Route exact path="/home" component={Home} />

          <Redirect to="/login" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminScreen from "../components/admin/AdminScreen";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import TakeChallenge from "../components/takeChallenges/TakeChallenge";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/takeChallenge" component={TakeChallenge} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/admin" component={AdminScreen} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;

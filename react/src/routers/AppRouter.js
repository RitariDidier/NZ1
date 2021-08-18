import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import AddChallengeQuestion from "../components/addChallengeQuestion/AddChallengeQuestion";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route
            exact
            path="/addchallengequestion"
            component={AddChallengeQuestion}
          />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

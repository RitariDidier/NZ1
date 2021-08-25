import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminScreen from "../components/AdminScreen";
import CreateQuestionRouter from "./CreateQuestionRouter";
import CreateTeam from "../components/Admin/teamCreation/CreateTeam";

const AdminRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/admin/create-question"
            component={CreateQuestionRouter}
          />
          <Route path="/admin" component={AdminScreen} />
          <Route path ="/admin/create-groups" component={CreateTeam}/>
        </Switch>
      </div>
    </Router>
  );
};

export default AdminRoutes;

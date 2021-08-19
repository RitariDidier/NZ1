import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminScreen from "../components/Admin/AdminScreen";
import CreateQuestionRouter from "./Admin/CreateQuestionRouter";

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
        </Switch>
      </div>
    </Router>
  );
};

export default AdminRoutes;

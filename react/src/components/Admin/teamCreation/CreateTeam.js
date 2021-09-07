import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CreateTeam = () => {
    const history = useHistory();
  return (
    <div>
      <div>
        <div className="adminGroup">
          <h2 className="adminTitle">Users and Groups</h2>
        </div>
        <div className="adminButtons">
          <div className="pAndGButton">
            <button className="button" onClick={() => history.push("/admin/create-groups/edit-user")}>
              Create/Edit User
            </button>
            <button className="button" onClick={() => history.push("/admin/create-groups/edit-group")}>
              Create/Edit Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
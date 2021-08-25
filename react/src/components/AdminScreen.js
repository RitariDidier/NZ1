import React from "react";
import { Route, useHistory } from "react-router-dom";
import CreateTeam from "../components/Admin/teamCreation/CreateTeam";

const AdminScreen = () => {
  const history = useHistory();

const groupPage = () =>{
  history.push("/admin/create-groups");
}

  return (
    <div>
      <div>
        <div className="adminHeader">
          <h3 className="adminHeader--title">Admin Homepage</h3>
          <h3 className="adminHeader--subtitle">The Inspectorate Games</h3>
        </div>
        <div className="adminCards">
          <div className="cardAdmin cardCreate">
            Create
            <button className="button" disabled>
              Create Challenge
            </button>
            <button
              className="button"
              onClick={() => history.push("/admin/create-question")}
            >
              Add Challenge question
            </button>
          </div>
          <div className="cardAdmin cardReview">
            Review
            <button className="button" disabled>
              View Challenge Results
            </button>
            <button className="button" disabled>
              View Challenge Questions
            </button>
          </div>
          <div className="cardAdmin cardPeople">
            People
            <button className="button" onClick={groupPage}>
              Users
            </button>
            <Route path = "/admin/create-groups"/>
            <button className="button" onClick={groupPage} >
              Groups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;

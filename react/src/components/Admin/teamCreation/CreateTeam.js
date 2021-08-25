import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const CreateTeam = () => {
  return (
    <div>
      <div>
        <div className="adminHeader">
          <h3 className="adminHeader--title">Admin Create Teams</h3>
          <h3 className="adminHeader--subtitle">The Inspectorate Games</h3>
        </div>
        <div className="adminCards">
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
            <button className="button" disabled>
              Users
            </button>
            <button className="button" disabled>
              Groups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
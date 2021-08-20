import React from "react";
import { useHistory } from "react-router-dom";

const AdminScreen = () => {
  const history = useHistory();
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

export default AdminScreen;

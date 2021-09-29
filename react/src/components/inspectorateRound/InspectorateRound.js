import React from "react";
import FillInTheBlankQuestion from "../fillInTheBlankQuestion/FillInTheBlankQuestion";

const InspectorateRound = () => {
  return (
    <main className="inspectorateRound">
      <header>
        <h2>Auckland Inspectorate Round 1</h2>
        <article>
          <p>Question 2</p>
          <p>Question Description</p>
        </article>
        <button id="settingsButton">Settings</button>
      </header>
      <FillInTheBlankQuestion />
      <footer>
        <button>Previous Question</button>
        <button>Next Question</button>
      </footer>
    </main>
  );
};

export default InspectorateRound;

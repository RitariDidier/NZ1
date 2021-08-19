import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import Transition from "../Transition";

const AddChallengeQuestion = () => {
  const history = useHistory();

  const addChallengeQuestion = (challengeName) => {
    switch (challengeName) {
      case "MCQ":
        history.push("/admin/create-question/mcq");
        break;
      case "Fill in blank":
        history.push("/admin/create-question/fill-in-blank");
        break;
      case "Find in picture":
        history.push("/admin/create-question/find-in-picture");
        break;
      case "Answer a question":
        history.push("/admin/create-question/short-answer");
        break;
      default:
        console.error("No such challenge type");
        break;
    }
  };

  return (
    <Transition>
      <main className="addChallengeQuestionComponent">
        <Link to="/admin">Back</Link>
        <header>
          <h1>Add Challenge Question</h1>
        </header>
        <section>
          <article onClick={() => addChallengeQuestion("MCQ")}>
            <img
              src="../resources/MCQ.png"
              alt="Multiple Choice Question"
              style={{ "--i": "2", "--j": "0" }}
            />
            <img
              src="../resources/MCQ.png"
              alt="Multiple Choice Question"
              style={{ "--i": "1", "--j": "1" }}
            />
            <img
              src="../resources/MCQ.png"
              alt="Multiple Choice Question"
              style={{ "--i": "0", "--j": "2" }}
            />
            <img
              src="../resources/MCQ.png"
              alt="Multiple Choice Question"
              style={{ "--i": "-1", "--j": "3" }}
            />
            <button>MCQ</button>
          </article>
          <article onClick={() => addChallengeQuestion("Fill in blank")}>
            <img
              src="../resources/fillinblank.png"
              alt="Multiple Choice Question"
              style={{ "--i": "2", "--j": "0" }}
            />
            <img
              src="../resources/fillinblank.png"
              alt="Multiple Choice Question"
              style={{ "--i": "1", "--j": "1" }}
            />
            <img
              src="../resources/fillinblank.png"
              alt="Multiple Choice Question"
              style={{ "--i": "0", "--j": "2" }}
            />
            <img
              src="../resources/fillinblank.png"
              alt="Multiple Choice Question"
              style={{ "--i": "-1", "--j": "3" }}
            />
            <button>Fill in blank</button>
          </article>
          <article onClick={() => addChallengeQuestion("Find in picture")}>
            <img
              src="../resources/Findinpicture.png"
              alt="Multiple Choice Question"
              style={{ "--i": "2", "--j": "0" }}
            />
            <img
              src="../resources/Findinpicture.png"
              alt="Multiple Choice Question"
              style={{ "--i": "1", "--j": "1" }}
            />
            <img
              src="../resources/Findinpicture.png"
              alt="Multiple Choice Question"
              style={{ "--i": "0", "--j": "2" }}
            />
            <img
              src="../resources/Findinpicture.png"
              alt="Multiple Choice Question"
              style={{ "--i": "-1", "--j": "3" }}
            />
            <button>Find in picture</button>
          </article>
          <article onClick={() => addChallengeQuestion("Answer a question")}>
            <img
              src="../resources/answeraquestion.webp"
              alt="Multiple Choice Question"
              style={{ "--i": "2", "--j": "0" }}
            />
            <img
              src="../resources/answeraquestion.webp"
              alt="Multiple Choice Question"
              style={{ "--i": "1", "--j": "1" }}
            />
            <img
              src="../resources/answeraquestion.webp"
              alt="Multiple Choice Question"
              style={{ "--i": "0", "--j": "2" }}
            />
            <img
              src="../resources/answeraquestion.webp"
              alt="Multiple Choice Question"
              style={{ "--i": "-1", "--j": "3" }}
            />
            <button>Answer a question</button>
          </article>
        </section>
      </main>
    </Transition>
  );
};

export default withRouter(AddChallengeQuestion);

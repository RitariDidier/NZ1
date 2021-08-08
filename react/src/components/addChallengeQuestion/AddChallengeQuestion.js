import React from "react";

const AddChallengeQuestion = () => {
  const addChallengeQuestion = (challengeName) => {
    switch (challengeName) {
      case "MCQ":
        break;
      case "Fill in blank":
        break;
      case "Find in picture":
        break;
      case "Answer a question":
        break;
      default:
        console.error("No such challenge type");
        break;
    }
  };

  return (
    <>
      <header>
        <a href="/admindashboard">Left arrow</a>

        <h1>Add Challenge Question</h1>
      </header>
      <section>
        <article>
          <button onClick={() => addChallengeQuestion("MCQ")}>MCQ</button>
        </article>
        <article>
          <button onClick={() => addChallengeQuestion("Fill in blank")}>
            Fill in blank
          </button>
        </article>
        <article>
          <button onClick={() => addChallengeQuestion("Find in picture")}>
            Find in picture
          </button>
        </article>
        <article>
          <button onClick={() => addChallengeQuestion("Answer a question")}>
            Answer a question
          </button>
        </article>
      </section>
    </>
  );
};

export default AddChallengeQuestion;

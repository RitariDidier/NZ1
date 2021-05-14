import React from "react"; // si

const HomeScreen = ({ history }) => {
  const handleClick = () => {
    console.log("redirecting to Take Challenge");
    history.push("/takeChallenge");
  };

  return (
    <>
      <h3>HomeScreen</h3>
      <button onClick={handleClick}>Take Challenge</button>
    </>
  );
};

export default HomeScreen;

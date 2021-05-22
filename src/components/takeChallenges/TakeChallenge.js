import React from "react";
import Card from "./Card";
import Transition from "../Transition";

const TakeChallenge = () => {
  console.log("Rendered Take Challenge")
  return (
    <Transition>
      <div className="bg">
        <div className="bg__Shape1s"></div>
      </div>
      <div className="containerCard">
        <div className="cards">
          <Card style="cardPrimary" number="1" />
          <Card style="cardSecondary" number="2" />
          <Card style="cardTertiary" number="3" />
          <Card style="cardQuaternary" number="4" />
          <Card style="cardQuinary" number="5" />
          <Card style="cardSenary" number="6" />
          <Card style="cardSeptenary" number="7" />
          <Card style="cardOctonary" number="8" />
        </div>
      </div>
    </Transition>
  );
};

export default TakeChallenge;

import React from "react";

const FillInTheBlankQuestion = () => {
  return (
    <main className="fillInTheBlankQuestion">
      <p>Fill in the missing words: </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet
        ut sem eget elementum. Donec at semper est, quis porttitor lorem. Donec
        eu ante nec orci finibus suscipit. Proin in velit suscipit, lobortis
        lectus eu, vestibulum magna.
        <input type="text" className="missingWord" size="8" /> id massa id
        sapien hendrerit sagittis vitae et nisi. Praesent ac porttitor nisl, non
        pulvinar nunc. Morbi urna nisl, pellentesque quis sem efficitur,
        ullamcorper <input type="text" className="missingWord" size="8" />{" "}
        felis. Proin aliquet lobortis magna, at dictum lorem malesuada ac. Morbi
        cursus tellus eu tellus tempus finibus. Phasellus rhoncus, nunc sed
        viverra mollis, augue lacus ultrices risus, sed molestie neque mi ac
        dolor.{" "}
      </p>
      <p>
        Duis pharetra leo ut risus maximus, vel elementum ante dignissim. Aenean
        in magna enim. Nunc{" "}
        <input type="text" className="missingWord" size="8" /> neque eget leo
        vulputate, in bibendum nulla posuere. Suspendisse leo enim, scelerisque
        nec dapibus at, porta ac dolor. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos. Aliquam non commodo lacus.
        Aenean tincidunt lobortis nulla, ac scelerisque mi vulputate. Duis
        dignissim, purus et faucibus{" "}
        <input type="text" className="missingWord" size="8" />, tortor justo
        sodales justo, ut vulputate est nibh ut turpis..{" "}
      </p>
    </main>
  );
};

export default FillInTheBlankQuestion;

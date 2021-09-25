import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const incrementNum = () => {
    setNum(num + 1);
  };
  const decrementNum = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <h1 data-testid="header">My Counter</h1>
      <h2 data-testid="counter">{num}</h2>
      <button onClick={incrementNum} data-testid="add-btn">
        +
      </button>
      <button onClick={decrementNum} data-testid="add-subtract">
        -
      </button>
    </div>
  );
};

export default Counter;

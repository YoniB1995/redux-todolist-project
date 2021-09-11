import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment, addNew } from "./redux/counter";
import { primaryColor, secondaryColor, userColor } from "./redux/themeColor";

const ColorTheme = () => {
  const [test, setTest] = useState("green");
  const { color } = useSelector((state) => state.color);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTest(e.target.value)}
        style={{ background: color }}
      />
      <button onClick={() => dispatch(userColor(test))}>Change</button>
      <div style={{ background: color, color: "white" }}>
        <h2>
          The first color is <p style={{ color: color }}></p>{" "}
        </h2>
        <button onClick={() => dispatch(primaryColor())}>
          Change to Primary
        </button>
        <button onClick={() => dispatch(userColor("green"))}>Green</button>
        {color}
      </div>
    </div>
  );
};

export default ColorTheme;

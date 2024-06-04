import React, { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  const Add = () => {
    setCount(count + 1);
  };
  const remove = () => {
    if (count == 0) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>
        States of React
      </h1>
      <hr></hr>
      <h1>1. useState</h1>
      <h3 style={{ marginLeft: "20px" }}>{count}</h3>
      <button onClick={Add} style={{ fontSize: "24px" }}>
        Add
      </button>
      <button onClick={remove} style={{ fontSize: "24px", marginLeft: "20px" }}>
        Remove
      </button>
    </div>
  );
}

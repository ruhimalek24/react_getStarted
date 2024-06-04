import React, { useState } from "react";

export default function use_state() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
    console.log(setCount);
  };
  return (
    <div>
      <h2>1. useState</h2>
      <h4>{count}</h4>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
}

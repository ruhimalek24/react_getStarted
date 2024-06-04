import React, { useState, useEffect } from "react";

export default function Effect() {
  const [color, setColor] = useState("#FFC300");

  useEffect(() => {
    alert("Color changed via useEffect state");
  }, [color]);

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "#FFC300" ? "purple" : "#FFC300"));
  };
  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        style={{ width: "100px", height: "200px", color }}
        onClick={changeColor}
      >
        <h1>2. useEffect State</h1>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function About() {
  const clickDark = () => {
    if (state.color === "black") {
      setState({
        color: "white",
        backgroundColor: "black",
      });
    }
  };
  const clickLight = () => {
    if (state.color === "white") {
      setState({
        color: "black",
        backgroundColor: "white",
      });
    }
  };
  const [state, setState] = useState({
    color: "black",
    backgroundColor: "white",
  });
  return (
    <>
      <div className="container my-3">
        <div style={{ state }}>
          <div className="card" style={{ width: "18rem", state }}>
            <div className="card-body" style={state}>
              <h3 className="card-title"> String Manipulator</h3>

              <p className="card-text">
                String manipulation basically refers to the process of handling
                and analyzing strings. It involves various operations concerned
                with modification and parsing of strings to use and change its
                data. R offers a series of in-built functions to manipulate the
                contents of a string. In this article, we will study different
                functions concerned with the manipulation of strings in R.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={clickDark}>
          Enable Dark mode
        </button>
        <button className="btn btn-primary mx-3" onClick={clickLight}>
          Enable Light mode
        </button>
      </div>
    </>
  );
}

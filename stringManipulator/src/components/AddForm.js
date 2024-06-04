import React, { useState } from "react";

export default function AddForm() {
  const [addField, setField] = useState(false);
  const clickRemove = () => {
    setField(!addField);
  };
  return (
    <div className="container">
      {addField && (
        <div className="input-group my-5">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      )}
      <button className="btn btn-primary" onClick={clickRemove}>
        Remove Field
      </button>
    </div>
  );
}

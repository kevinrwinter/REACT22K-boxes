import React from "react";

const Box = (props) => {
  return (
    <div className="card">
      <div>
        <h3>{props.name}</h3>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>

        <div>{props.languages}</div>
      </div>
    </div>
  );
};

export default Box;

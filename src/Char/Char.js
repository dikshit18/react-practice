import React from "react";

const Char = props => {
  console.log("I have reached here...", props);

  const styleSheet = {
    border: "2px solid #eee",
    margin: "0 auto",
    padding: "5px",
    textAlign: "center",
    display: "inline-block"
  };
  return (
    <p style={styleSheet} onClick={props.click}>
      {props.text}
    </p>
  );
};

export default Char;

import React from "react";
const minLength = 5;
const maxLength = 10;
const Validation = props => {
  return (
    <div>
      <p>Text length is {props.textLength}</p>

      {props.textLength > 1 && props.textLength < minLength ? (
        <p> "Text Too short."</p>
      ) : null}

      {props.textLength > 1 && props.textLength > maxLength ? (
        <p> "Text Too long."</p>
      ) : null}
    </div>
  );
};

export default Validation;

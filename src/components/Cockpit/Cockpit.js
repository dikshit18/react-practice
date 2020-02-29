import React, { useEffect, memo, useContext } from "react";
import styled from "styled-components";
import "./Cockpit.css";
import AuthContext from "../../context/auth-context";
const Cockpit = props => {
  const authContext = useContext(AuthContext);
  const StyledButton = styled.button`
    background-color: ${props => (props.alt ? "red" : "yellow")};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
      color: black;
    }
  `;
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      console.log("Saved data");
    }, 1000);
  });
  const classes = [];
  if (props.personsLength <= 2) {
    classes.push("red");
  }
  if (props.personsLength <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      <h1>I am a React App !</h1>
      <p className={classes.join(" ")}>This is really working.</p>
      <StyledButton alt={props.alt} onClick={props.toggle}>
        Switch Name
      </StyledButton>
      <button onClick={authContext.login}>Log IN</button>
    </div>
  );
};
export default memo(Cockpit);

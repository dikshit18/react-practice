import React, { Component } from "react";
import "./Person.css";
import styled from "styled-components";
import Auxiliary from "../../../containers/hoc/Auxiliary";
import withClass from "../../../containers/hoc/withClass";
import PropTypes from "prop-types";
//This is a staleless component as this does not manage any state.
//It is advised to create as many as stateless components.
import AuthContext from "../../../context/auth-context";
const StyledDiv = styled.div`
  width: 60%;
  margin: 10px auto;
  border: 10px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log("==>", this.context.authenticated);
  }
  render() {
    console.log("Person.js rendering...");
    return (
      <Auxiliary>
        {this.context.authenticated ? (
          <p>Authenicated!</p>
        ) : (
          <p>Please login</p>
        )}
        <p onClick={this.props.click} className="Person">
          My name is {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, null);

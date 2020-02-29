import React, { Component } from "react";
import "./App.css";
import Person from "../components/Persons/Person/Person";
import UserInput from "../components/UserInput/UserInput";
import Validation from "../components/Validation/Validation";
import Char from "../components/Char/Char";
import styled from "styled-components";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "./hoc/withClass";
import Auxiliary from "./hoc/Auxiliary";
import Practice from "../components/Practice/Practice";
import AuthContext from "../context/auth-context";
const StyledButton = styled.button`
  background-color: ${props => (props.alt ? "red" : "green")};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      {
        key: 101,
        name: "Max",
        age: "1"
      },
      {
        key: 102,
        name: "Dikshit",
        age: "29"
      },
      {
        key: 104,
        name: "Stephanie",
        age: 26
      }
    ],
    showPersons: false,
    textLength: 0,
    text: "",
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        {
          name: "Max",
          age: 28
        },
        {
          name: newName,
          age: 29
        },
        {
          name: "Stephanie",
          age: 26
        }
      ]
    });
  };

  nameChangedHandler = (event, key) => {
    const personIndex = this.state.persons.findIndex(item => item.key === key);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return { persons, changeCounter: prevState.changeCounter + 1 };
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  // componentWillMount = () => {
  //   console.log("[App.js] componentWillMount");
  // };

  // componentDidMount() {
  //   console.log("[App.js] componentDidMount");
  // }
  // componentDidUpdate() {
  //   console.log("[App.js] componentDidUpdate");
  // }
  // shouldComponentUpdate() {
  //   console.log("[App.js] shouldComponentUpdate");
  //   return true;
  // }

  deletePersonHandler = index => {
    let persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons });
  };

  deleteCharHandler = index => {
    const text = this.state.text.split("");
    text.splice(index, 1);
    this.setState({
      text: text.join(""),
      textLength: text.length
    });
  };

  calculateLength = event => {
    const length = event.target.value.length;
    this.setState({
      textLength: length,
      text: event.target.value
    });
  };
  displayCockpit = () => {
    this.setState({
      showCockpit: !this.state.showCockpit
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] render");
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons, chars;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
      style.backgroundColor = "red";
    }
    if (this.state.textLength) {
      console.log("...", this.state.text);
      const characters = this.state.text.slice();
      chars = characters.split("").map((element, index) => {
        console.log("Element is...", element);
        return (
          <Char
            text={element}
            key={index}
            click={() => this.deleteCharHandler(index)}
          />
        );
      });
    }
    return (
      <Auxiliary>
        <button onClick={this.displayCockpit}>Show/Hide Cockpit </button>
        <Practice text="Hello" />
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              alt={this.state.showPersons}
              toggle={this.togglePersonsHandler}
              personsLength={this.state.persons.length}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
        {/* <UserInput change={this.calculateLength} text={this.state.text} />
        <Validation textLength={this.state.textLength} />
        {chars} */}
      </Auxiliary>
    );
  }
}

export default withClass(App, "App");

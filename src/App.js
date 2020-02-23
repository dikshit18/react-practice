import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import styled from "styled-components";

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
  state = {
    persons: [
      {
        key: 101,
        name: "Max",
        age: 28
      },
      {
        key: 102,
        name: "Manu",
        age: 29
      },
      {
        key: 104,
        name: "Stephanie",
        age: 26
      }
    ],
    showPersons: false,
    textLength: 0,
    text: ""
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
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

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

  render() {
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                {...person}
                changed={event => this.nameChangedHandler(event, person.key)}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
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

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>I am a React App !</h1>
        <p className={classes.join(" ")}>This is really working.</p>

        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Switch Name
        </StyledButton>
        {persons}
        {/* <UserInput change={this.calculateLength} text={this.state.text} />
        <Validation textLength={this.state.textLength} />
        {chars} */}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hello World")
    // );
  }
}

export default App;

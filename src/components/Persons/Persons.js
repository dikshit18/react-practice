import React, { Component } from "react";
import Person from "./Person/Person";
class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (nextProps.persons !== this.props.persons) return true;
    else return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return null;
  }
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("[Persons.js] componentDidUpdate");
  }

  render() {
    console.log("Perons.js rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          {...person}
          changed={event => this.props.changed(event, person.key)}
          click={() => this.props.clicked(index)}
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;

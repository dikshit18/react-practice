import React, { Component } from "react";
class Practice extends Component {
  constructor() {
    super();
    this.state = {
      sample: "HelloWorld"
    };
    console.log("I am the constructor. I will be called first.");
  }
  //   componentWillReceiveProps(nextProps) {
  //     console.log("componentWillReceiveProps...", nextProps);
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     console.log("I am derived state from props.");
  //     console.log("I am derived state from props.", nextProps);
  //     console.log("I am derived state from props.", prevState);

  //     return null;
  //   }
  componentDidMount() {
    console.log("I am the component did mount..");
  }
  render() {
    return <p>Hello from practice component. {this.props.text} </p>;
  }
}
export default Practice;

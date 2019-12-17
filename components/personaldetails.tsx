import React, { Component } from "react";

let person = { firstName: "Nitish", lastName: "Poojari" };

export default function FirstName(props) {
  person.firstName = props.name;
  return <div>Hi {person.firstName}</div>;
}

//Component names should always start with capital letter
export function LastName(props) {
  person.lastName = props.name;
  return <div>{person.lastName}!!</div>;
}

export class FullName extends Component {
  constructor(props) {
    super(props);
    //state is initialized in contructor only
    this.state = { greeting: "Hi" };
    //this.changeGreet = this.changeGreet.bind(this);
  }

  changeGreet = () => {
    this.setState({ greeting: "Hello" });
  }

  render() {
    person.firstName = this.props.FirstName;
    person.lastName = this.props.LastName;
    return (
      <div>
        {this.state.greeting} {person.firstName} {person.lastName} <br />
        <button onClick={this.changeGreet }> Change Greeting</button>
      </div>
    );
  }
}

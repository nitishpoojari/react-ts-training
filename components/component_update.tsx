import React, { memo } from "react";
import ReactDOM from "react-dom";

export class UpdateCheck extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { message: this.props.Message };
  }

  messageUpdate = () => {
    //Wont work in Pure Component but works in normal component
    var msg = this.state;
    msg.message += "!";
    this.setState(msg);

    //Works in pure component
    //this.setState({message: "Works"});
  };

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.messageUpdate}>Add Mesage</button>
      </div>
    );
  }
}

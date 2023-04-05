import React, { Component } from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <Welcome name={this.state.value} />
      </div>
    );
  }
}

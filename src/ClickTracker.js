import React, { Component } from "react";

export default class ClickTracker extends Component {
  state = {
    buttonName: "",
  };

  eventHandler = (event) => {
    this.setState({
      buttonName: event.target.name,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.buttonName}</h1>
        <button name="Button 1" onClick={this.eventHandler}>
          Button 1
        </button>
        <button name="Button 2" onClick={this.eventHandler}>
          Button 2
        </button>
        <button name="Button 3" onClick={this.eventHandler}>
          Button 3
        </button>
      </div>
    );
  }
}

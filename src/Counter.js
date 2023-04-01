import React, { Component } from "react";
import ClickCounter from "./ClickCounter ";

export default class Counter extends Component {
  state = {
    count: this.props.initialValue,
  };

  incrementCounter = () => {
    this.setState({
      count: this.state.count + this.props.incrementAmount,
    });
  };

  render() {
    return (
      <ClickCounter
        count={this.state.count}
        incrementCounter={this.incrementCounter}
      />
    );
  }
}

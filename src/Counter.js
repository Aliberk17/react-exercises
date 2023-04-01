import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + this.props.incrementAmount });
    }, this.props.incrementInterval);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

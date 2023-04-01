import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({ count: this.state.count + this.props.incrementAmount });
    }, this.props.incrementInterval);
  }

  render() {
    return <h1>{this.props.count}</h1>;
  }
}

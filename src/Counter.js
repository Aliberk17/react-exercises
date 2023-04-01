import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return <h1>{this.props.count}</h1>;
  }
}

import React, { Component } from "react";

export default class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.props.incrementCounter()}>Increase</button>
      </div>
    );
  }
}

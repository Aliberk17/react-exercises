import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name || "Default name"}!</p>
        {this.props.age > 18 ? (
          <Age age={this.props.age} />
        ) : (
          <p>You are very young!</p>
        )}
      </div>
    );
  }
}

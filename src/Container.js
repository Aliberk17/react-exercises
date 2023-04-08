import React, { Component } from "react";

export default class Container extends Component {
  render() {
    return <div className="customContainer">
        <p>{this.props.title}</p>
    </div>;
  }
}

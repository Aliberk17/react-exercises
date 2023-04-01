import React, { Component } from "react";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age="26" />
        <Counter initialValue={0} incrementInterval={2000} incrementAmount={7} />
        <ClickTracker/>
      </div>
    );
  }
}

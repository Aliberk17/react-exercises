import React, { Component } from "react";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome ";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin ";
import Welcome from "./Welcome";

export default class App extends Component {
  onLogin = (info) => {};

  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age="26" />
        <Counter
          initialValue={0}
          incrementInterval={2000}
          incrementAmount={7}
        />
        <ClickTracker />
        <InteractiveWelcome />
        <Login onLogin={this.onLogin} />
        <UncontrolledLogin onLogin={this.onLogin} />
      </div>
    );
  }
}

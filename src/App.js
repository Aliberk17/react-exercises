import React, { Component } from "react";
import ClickTracker from "./ClickTracker";
import Container from "./Container";
import Counter from "./Counter";
import DisplayLanguageWrapper from "./DisplayLanguageWrapper";
import Hello from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome ";
import Login from "./Login";
import TodoList from "./TodoList";
import UncontrolledLogin from "./UncontrolledLogin ";
import Welcome from "./Welcome";
import Sum from "./Sum";
import ClickCounter from "./ClickCounter ";

export default class App extends Component {
  onLogin = (info) => {};

  onCounterChange = (count) => {};

  renderTodoList = (items, handleListItemRemoveClick) => {
    return (
      <ul>
        {items.map((item) => (
          <div key={item}>
            <li>{item}</li>
            <button onClick={() => handleListItemRemoveClick(item)}>
              remove
            </button>
          </div>
        ))}
      </ul>
    );
  };

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
        <TodoList render={this.renderTodoList} />
        <Container title="Ali" />
        <DisplayLanguageWrapper />
        <Sum numbers={[1, 2, 3, 4]} />
        <ClickCounter onCounterChange={this.onCounterChange} />
      </div>
    );
  }
}

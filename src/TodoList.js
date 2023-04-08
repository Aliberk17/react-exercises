import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    items: [],
    inputText: "",
  };

  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  handleClick = (event) => {
    let newItems = this.state.items;
    newItems.push(this.state.inputText);
    this.setState({
      items: newItems,
      inputText: "",
    });
  };

  handleResetClick = (event) => {
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <input value={this.state.inputText} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add to List</button>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }
}

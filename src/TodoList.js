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

  handleListItemRemoveClick = (item) => {
    let newItems = this.state.items;
    let index = newItems.indexOf(item);
    newItems.splice(index, 1);
    this.setState({
      items: newItems,
    });
  };

  render() {
    return (
      <div>
        {this.props.render(this.state.items, this.handleListItemRemoveClick)}
        <input value={this.state.inputText} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add to List</button>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }
}

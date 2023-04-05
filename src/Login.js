import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleChanged = (event) => {
    if (event.target.name === "remember") {
      this.setState({
        remember: !this.state.remember,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  render() {
    return (
      <form>
        <label>username: </label>
        <input name="username" onChange={this.handleChanged} />
        <br />
        <label>password: </label>
        <input name="password" onChange={this.handleChanged} />
        <br />
        <label>remember: </label>
        <input name="remember" type="checkbox" onChange={this.handleChanged} />
      </form>
    );
  }
}

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

  resetInputs = (event) => {
    event.preventDefault();
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  render() {
    return (
      <form>
        <label>username: </label>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChanged}
        />
        <br />
        <label>password: </label>
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChanged}
        />
        <br />
        <label>remember: </label>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleChanged}
        />
        <br />
        <button
          disabled={this.state.username === "" && this.state.password === ""}
          onClick={(event) => {
            event.preventDefault();
            this.props.onLogin(this.state);
          }}
        >
          login
        </button>
        <button onClick={this.resetInputs}>reset</button>
      </form>
    );
  }
}

import React, { Component } from "react";

export default class UncontrolledLogin extends Component {
  username = React.createRef();
  password = React.createRef();
  remember = React.createRef();

  render() {
    return (
      <form>
        <label>username: </label>
        <input ref={this.username} />
        <br />
        <label>password: </label>
        <input ref={this.password} />
        <br />
        <label>remember: </label>
        <input type="checkbox" ref={this.remember} />
        <br />
        <button
          disabled={this.username === "" && this.password === ""}
          onClick={(event) => {
            event.preventDefault();
            this.props.onLogin({
              username: this.username.current.value,
              password: this.password.current.value,
              remember: this.remember.current.value,
            });
          }}
        >
          login
        </button>
      </form>
    );
  }
}

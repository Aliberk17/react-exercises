import React, { Component, createContext } from "react";
import DisplayLanguage from "./DisplayLanguage ";

export const LanguageContext = createContext();

export default class DisplayLanguageWrapper extends Component {
  state = {
    language: "English",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}

import React, { Component } from "react";
import { LanguageContext } from "./DisplayLanguageWrapper";

export default class DisplayLanguage extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(value) => <h1>{value}</h1>}
      </LanguageContext.Consumer>
    );
  }
}

import React, { Component } from "react";
import { LanguageContext } from "./DisplayLanguageWrapper";

export default class DisplayLanguage extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(value) => <div>{value}</div>}
      </LanguageContext.Consumer>
    );
  }
}

// eslint-disable-next-line no-unused-vars
import React from "react";

import "./App.css";
import Section from "./Section";
import ThemeContext from "./Context/ThemeContext";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <>
        <div className="app">
          <ThemeContext.Provider value={{ theme }}>
            <Section />
          </ThemeContext.Provider>
        </div>
      </>
    );
  }
}

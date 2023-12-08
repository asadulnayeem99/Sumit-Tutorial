import React from "react";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import Section from "./Components/Section";
import themeContext from "./Contexts/themeContexts";
export default class App extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    // eslint-disable-next-line no-unused-vars
    const { theme } = this.state;
    return (
      <>
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <themeContext.Provider value={{ theme: theme }}>
          <Section />
        </themeContext.Provider>
      </>
    );
  }
}

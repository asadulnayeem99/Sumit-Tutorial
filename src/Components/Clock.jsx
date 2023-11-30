import React from "react";
import Button from "./Button";
class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = () => {
    let newLocale;
    switch (this.state.locale) {
      case "bn-BD":
        newLocale = "en-US";
        break;
      case "en-US":
        newLocale = "bn-BD";
        break;
      default:
        newLocale = "en-US";
    }
    this.setState({
      locale: newLocale,
    });
  };
  render() {
    console.log("clock");
    const { date, locale } = this.state;
    let button;
    if (locale === "bn-BD") {
      button = <Button change={this.handleClick} locale="en-US" />;
    } else {
      button = <Button change={this.handleClick} locale="bn-BD" />;
    }

    return (
      <>
        <h1>
          <span>{this.state.date.toLocaleTimeString(locale)}</span>
        </h1>
        {button}
      </>
    );
  }
}
export default Clock;

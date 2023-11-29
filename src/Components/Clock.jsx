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
    this.setState({
      locale: "en-US",
    });
  };
  render() {
    console.log("clock");
    const { date, locale } = this.state;
    return (
      <>
        <h1>
          <span>{this.state.date.toLocaleTimeString(locale)}</span>
        </h1>
        <Button change={this.handleClick} locale="en-US" />
      </>
    );
  }
}
export default Clock;

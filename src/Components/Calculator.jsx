import React from "react";
import { convert, toCelsius, toFarenhite } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TempInput from "./TempInput";
export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };
  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const farenhit =
      scale === "c" ? convert(temperature, toFarenhite) : temperature;
    return (
      <div>
        <TempInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TempInput
          scale="f"
          temperature={farenhit}
          onTemperatureChange={this.handleChange}
        />
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </div>
    );
  }
}

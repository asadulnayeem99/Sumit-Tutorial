import React from "react";
const scalenames = {
  c: "Celsius",
  f: "Farenhite",
};
export default function TempInput({ scale, temperature, onTemperatureChange }) {
  return (
    <div>
      <fieldset>
        <legend>Enter Temperature in {scalenames[scale]}: </legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line react/prop-types
export default function ClickCounter({
  count,
  incrementCount,
  theme,
  switchTheme,
}) {
  const style =
    theme === "dark"
      ? {
          backgroundColor: "black",
          color: "red",
        }
      : null;
  return (
    <div>
      <h1 style={style} type="button" onMouseOver={incrementCount}>
        Hovered {count} times
      </h1>
      <button onClick={switchTheme}>Click</button>
    </div>
  );
}

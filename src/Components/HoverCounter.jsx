// eslint-disable-next-line no-unused-vars
import React from "react";
export default function ClickCounter({ count, incrementCount }) {
  return (
    <div>
      <h1 type="button" onMouseOver={incrementCount}>
        Hovered {count} times
      </h1>
    </div>
  );
}

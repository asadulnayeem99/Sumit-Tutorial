import React from "react";
export default class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 type="button" onMouseOver={incrementCount}>
          Hovered {count}
        </h1>
      </div>
    );
  }
}

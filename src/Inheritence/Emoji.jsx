import React from "react";
export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
  render(override) {
    let text = "I am Emoji from Emoji jsx";
    if (override) {
      text = override;
    }
    return <div>{text}</div>;
  }
}

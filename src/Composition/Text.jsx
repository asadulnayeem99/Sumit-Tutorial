export default function Text({ addEmoji }) {
  let text = "I am composition text";
  //   return addEmoji ? addEmoji(text, "💚") : text;
  if (addEmoji) {
    text = addEmoji(text, "💜");
  }
  return <div>{text}</div>;
}

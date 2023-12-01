export default function Text({ addEmoji }) {
  const text = "I am composition text";
  return <div>{addEmoji ? addEmoji(text, "💚") : text}</div>;
}

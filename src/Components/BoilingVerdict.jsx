export default function BoilingVerdict({ celcius = 0 }) {
  if (celcius >= 100) {
    return <p>Water Would Boil</p>;
  }
  return <p>Water would not boil</p>;
}

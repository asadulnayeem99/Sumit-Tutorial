import Emoji from "./Composition//Emoji";
import Text from "./Composition/Text";

function App() {
  return (
    <>
      <Emoji>{(addEmoji) => <Text addEmoji={addEmoji} />}</Emoji>
    </>
  );
}

export default App;

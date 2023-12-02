import Bracket from "./Composition/Bracket";
import Emoji from "./Composition/Emoji";
import Text from "./Composition/Text";
function App() {
  return (
    <Emoji>
      {({ addEmoji }) => (
        <Bracket>
          {({ addBracket }) => (
            <Text addEmoji={addEmoji} addBracket={addBracket} />
          )}
        </Bracket>
      )}
    </Emoji>
  );
}

export default App;

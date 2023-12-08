import themeContext from "../Contexts/themeContexts";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
export default function Content() {
  return (
    <div>
      <h1>This is Content</h1>
      <Counter>
        {(counter, incrementCount) => {
          return (
            <themeContext.Consumer>
              {({ theme }) => (
                <HoverCounter
                  count={counter}
                  incrementCount={incrementCount}
                  theme={theme}
                />
              )}
            </themeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
}

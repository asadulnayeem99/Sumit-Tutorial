import { useContext } from "react";
import themeContext from "../Contexts/themeContexts";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
export default function Content() {
  const context = useContext(themeContext);
  console.log(context);
  const { theme, switchTheme } = context;
  return (
    <div>
      <h1>This is Content</h1>
      <Counter>
        {(counter, incrementCount) => {
          return (
            <HoverCounter
              count={counter}
              incrementCount={incrementCount}
              theme={theme}
              switchTheme={switchTheme}
            />
          );
        }}
      </Counter>
    </div>
  );
}

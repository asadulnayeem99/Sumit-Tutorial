import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import HoverCounter from "./Components/HoverCounter";
function App() {
  return (
    <>
      <Counter>
        {(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>

      {/* <User name={(isLoggedin) => (isLoggedin ? "nayeem" : "Guest")} /> */}
    </>
  );
}

export default App;

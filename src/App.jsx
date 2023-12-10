import { useCallback, useMemo, useState } from "react";
import Button from "./Components/Button";
import ShowCount from "./Components/ShowCount";
import Title from "./Components/Title";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
    // setCount2(count2+1) dile [count1] evabe bole dite hobe
  }, []);
  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i += 1;
    }
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
      <Button handleClick={incrementByOne}>Increment By One</Button>

      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </>
  );
}

export default App;

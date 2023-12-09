import { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");

  const tick = () => {
    console.log("clock ticking");
    setDate(new Date());
  };
  useEffect(() => {
    console.log("update date");
    const interval = setInterval(tick, 1000);
    // do the clean-up stop the timer
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("updating tite");
    document.title = `Clicked ${count} Times`;
  }, [count]);

  const addClick = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <div>
      <p>
        <input
          type="text"
          name=""
          value={text}
          onChange={(e) => setText(e.target.value)}
          id=""
        />
      </p>
      <p>Time :{date.toLocaleTimeString()} </p>
      <p>
        <button onClick={addClick}>Click</button>
      </p>
    </div>
  );
};

export default MyComponent;

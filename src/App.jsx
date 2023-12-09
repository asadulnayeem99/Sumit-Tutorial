import { useState } from "react";
import MyComponent from "./Components/MyComponent";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>{show && <MyComponent />}</div>
      {/* <MyComponentClass /> */}
      <p>
        <button onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide Post" : "Show Post"}
        </button>
      </p>
      <hr />
    </>
  );
}

export default App;

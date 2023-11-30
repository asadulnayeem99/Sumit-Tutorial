import ClockList from "./Components/ClockList";
import Form from "./Components/Form";
function App() {
  // console.log("app");
  const quantities = [1, 2, 3];
  return (
    <>
      {/* <Clock locale="bn-BD" /> */}
      <ClockList quantities={quantities} />
      <Form />
    </>
  );
}

export default App;

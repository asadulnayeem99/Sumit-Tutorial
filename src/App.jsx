import ClockList from "./Components/ClockList";

function App() {
  console.log("app");
  const quantities = [1, 2, 3];
  return (
    <>
      {/* <Clock locale="bn-BD" /> */}
      <ClockList quantities={quantities} />
    </>
  );
}

export default App;

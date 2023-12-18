import useWindowWidth from "../hooks/useWindowWidth";

const LayoutComponentTwo = () => {
  const sizeOf = useWindowWidth();
  return (
    <div>
      <h1 className={sizeOf ? "small" : "large"}>
        You are browsing on LayoutComponent Two
      </h1>
    </div>
  );
};

export default LayoutComponentTwo;

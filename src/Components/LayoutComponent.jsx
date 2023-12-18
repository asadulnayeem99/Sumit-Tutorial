import useWindowWidth from "../hooks/useWindowWidth";

const LayoutComponent = () => {
  const size = useWindowWidth();

  return (
    <div>
      <h1>You are browsing on {size ? "small" : "large"} screen device</h1>
    </div>
  );
};

export default LayoutComponent;

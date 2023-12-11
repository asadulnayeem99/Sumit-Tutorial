import React from "react";

const Input = ({ type, placeholder }, ref) => {
  return (
    <input type={type} name="" placeholder={placeholder} id="" ref={ref} />
  );
};
const forwardedInput = React.forwardRef(Input);
export default forwardedInput;

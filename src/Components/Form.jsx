import React, { useEffect, useRef } from "react";
import Input from "./Input";

const Form = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <p>
        <Input type="text" placeholder="enter your text..." />
      </p>
    </div>
  );
};

export default Form;

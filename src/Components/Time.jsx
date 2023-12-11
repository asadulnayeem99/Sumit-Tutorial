import React, { useEffect, useRef, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef();
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    buttonRef.current = setInterval(tick, 1000);
    return () => {
      clearInterval(buttonRef.current);
    };
  });
  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button onClick={() => clearInterval(buttonRef.current)}>
          Clean Up
        </button>
      </p>
    </div>
  );
};

export default Time;

import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState("");
  const handleInput = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    const warning = inputValue.includes(".js")
      ? "You nedd Js skill to complete the task"
      : null;
    setTodo(inputValue);
    setWarning(warning);
  };
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
        <hr />
        <h2>{warning || "Good Choice !"}</h2>
      </p>
    </div>
  );
};

export default Todo;

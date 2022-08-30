import React, { useState } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev: number) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
};

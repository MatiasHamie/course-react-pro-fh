import { useState } from "react";

type Props = {
  initialValue?: number;
};

export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

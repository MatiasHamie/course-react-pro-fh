import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 10,
  });

  return (
    <>
      <h2 ref={elementToAnimate}>CounterHook: {counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

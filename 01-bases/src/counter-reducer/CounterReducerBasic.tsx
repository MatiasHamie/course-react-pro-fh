import { useReducer } from "react";
import { counterReducer } from "./state/counterReducer";
import * as CounterActions from "./actions/actions";

const INITIAL_STATE = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerSegmentado = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(CounterActions.doReset());
  };

  const handleIncreaseBy = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

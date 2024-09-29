import React from "react";
import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducerSegmentado } from "./counter-reducer/CounterReducerBasic";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy initialValue={10} />
      <CounterEffect initialValue={5} />
      <CounterHook />
      <CounterReducerSegmentado />
    </>
  );
}

export default App;

import { useEffect } from "react";
import useCounter from "./userCounter";

function ClickCounter(props) {
  const [count, increment, decrement, reset] = useCounter();

  useEffect(() => {
    props.onCounterChange(count);
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ClickCounter;

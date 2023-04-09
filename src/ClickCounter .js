import { useEffect, useState } from "react";

function ClickCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    props.onCounterChange(count);
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default ClickCounter;

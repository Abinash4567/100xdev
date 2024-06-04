import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={increaseCount}>Counter: {count}</button>
    </>
  );
}

export default App
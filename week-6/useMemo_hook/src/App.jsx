import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  // const [sum, setSum] = useState(0);

  let sum = useMemo(() => {
    console.log(`${value}`);
    let total = 0;
    for (let i = 0; i <= value; i++) {
      total += i;
    }
    return total;
  }, [value]);


  return (
    <>
    <input onChange={(event)=>setValue(event.target.value)} placeholder="enter a value" value={value}></input>
    <div>The sum from 1 to {value} is <h1>{sum}</h1></div>
    <button onClick={()=>setCount(count+1)}>Count: {count}</button>
    </>
  )
}

export default App;
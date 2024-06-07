import { useContext } from 'react'
import './App.css'
import CounterContextProvider from './context/countContextProvider';
import {CounterContext} from "./context/counterContext";



function App() {
  return (
    <CounterContextProvider>
      <DisplayCount />
      <ChangeCount />
    </CounterContextProvider>
  )
}

export default App;

function DisplayCount() {
  const {counter} = useContext(CounterContext);
  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  );
}


function ChangeCount() {
  const {incrementCounter, decrementCounter} = useContext(CounterContext);
  return (
    <div>
      <button onClick={ incrementCounter }>Increment</button>
      <button onClick={ decrementCounter }>Decrement</button>
    </div>
  )
}
import { useReducer } from 'react';
import './App.css'

function App() {
  function reducer(state: { count: number; }, action: { type: string; }) {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    }
    return state;
  }

  const [state, dispatch] = useReducer(reducer, { count: 12 });

  return (
    <>
      <h1>Hello</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <h1>{state.count}</h1>
    </>
  );
}

export default App

import './App.css'
import { useRecoilValue, useRecoilState, RecoilRoot } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}


function CountRender() {
  const count = useRecoilValue(countAtom);
  const evenOrODD = useRecoilValue(evenSelector);

  return (
    <div>
      {count}
      <div style={{ fontSize: 90 }}>Hello</div>
      {evenOrODD ? <div>Even</div> : <div>Odd</div>}
    </div>
  );
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App

import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { networkAtom, messagingAtom, notificationAtom, jobsAtom, summedAtom } from './store/atoms/atoms'

function App() {
  return (
    <RecoilRoot>
      <h1>Helo</h1>
      <Appbar />
    </RecoilRoot>
  );
}

export default App



function Appbar() {
  const networkCount = useRecoilValue(networkAtom);
  const setCount = useSetRecoilState(networkAtom);
  return (
    <div>
      <button>My Home {networkCount >= 100 ? <h5>99+</h5> : <h5>{networkCount}</h5>} </button>
      <button onClick={ ()=> setCount(c => c+1) }>Increase Count</button>
      <button onClick={ ()=> setCount(c => c-1) }>Decrease Count</button>


      <button>My Network</button>
      <button>Jobs {useRecoilValue(jobsAtom)}</button>
      <button>Messaging {useRecoilValue(notificationAtom)}</button>
      <button>Network {useRecoilValue(messagingAtom)}</button>

      <br />
      <br />
      <button>Profile {useRecoilValue(summedAtom)}</button>
    </div>
  );
}


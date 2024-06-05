import './App.css';
import { useState, memo } from 'react';

// function App() {
//   return (
//     <>
//       <FunctionWithHeader />
//       <Header title="Old Headline" />
//     </>
//   );
// }

// function Header({ title }) {
//   return <h1>{title}</h1>;
// }

// function FunctionWithHeader() {
//   const [title, setTitle] = useState("Abinash");


//   return (
//     <>
//       <h1>{title}</h1>
//       <button onClick={randomTitle}>Random Title</button>
//     </>
//   );
// }


function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <>

      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>

      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>

      <Greeting name={name} />
    </>
  );
}

function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello{name && ', '}{name}!</h3>;
};


export default App;
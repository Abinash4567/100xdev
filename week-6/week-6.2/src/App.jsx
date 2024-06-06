import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [selectId, setSelectId] = useState(1);

  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${selectId}`)
      .then(function(res)
        {
          setData(res.data.todo);
          // console.log(res.data.todo);
        })
  }, [selectId]);

    return (
    <>
      <button onClick={()=>setSelectId(1) }>1</button>
      <button onClick={()=>setSelectId(2) }>2</button>
      <button onClick={()=>setSelectId(3) }>3</button>

      <h1>{selectId}</h1>
      <div>{data.title}</div>
      <div>{data.description}</div>
      {/* <Container name={data.title} description={data.description} /> */}
    </>
  )
}

// function Container({ name, description }) {
//   return (
//     <div style={{backgroundColor: 'skyblue'}}>
//       <h3>{name}</h3>
//       <div style={{ paddingBottom: 20, fontSize: 20 }}>{description}</div>
//     </div>
//   );
// }

export default App
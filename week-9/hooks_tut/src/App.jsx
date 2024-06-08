import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <CustomComponent/>
      <FetchingComponent />
    </>
  )
}

export default App;

function CustomComponent() {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [online, setOnline] = useState(window.navigator.onLine)

  function handleChange(){
    setWidth(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener('resize', handleChange);
    window.addEventListener('online', () => setOnline(true));
    window.addEventListener('offline', () => setOnline(false));
    console.log(`Changed`);

    return ()=>{
      window.removeEventListener("resize");
      window.removeEventListener("online");
      window.removeEventListener("offline");
      
      console.log("cleanup")
    }
  }, [])
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <h1>{width}</h1>
      {online ? <div style={{width: "100px", height: "100px", backgroundColor: "green", borderRadius: "100px"}}></div>: <div style={{width: "100px", height: "100px", backgroundColor: "red", borderRadius: "100px"}}></div>}
    </>
  )
}


function useFetch()
{
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function load(){
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const res = await response.json();
      setData(res);
      setLoading(false);
    }
    load();
  }, [])

  return {loading: loading, data: data}
}

function FetchingComponent() {
  const datas = useFetch();
  return datas.loading ? (
    <h1>Loading</h1>
  ) : (
    datas.data.map((indi) => <div key={indi.id} style={{backgroundColor: "skyblue", fontSize: 12}}>{indi.title}</div>)
  );
}

import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        fetch('https://dummyjson.com/todos')
        .then(async function(res)
        {
          const response = await res.json();
          // console.log(response);
          setData(response.todos);
        })
        setLoading(false);
  }, []);

  return (
    <>
      <h1>Hello</h1>
      {loading ? <h1>Loading...</h1> : data.map(function(indi){
          return (<div key={indi.id}>
            <h1>{indi.todo}</h1>
            <h1>{indi.userId}</h1>
          </div>)
      })}
    </>
  )
}

export default App
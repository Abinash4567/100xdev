import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");

  useEffect(()=>{
    const socket = new WebSocket(`ws://localhost:8080`);
    socket.onopen = () =>{
      console.log(`Server Connected!!`);
      setSocket(socket);
    }

    socket.onmessage = (message) =>{
      console.log(`Received Message: ${message.data}`);
      setLatestMessage(message.data);
    }

  }, []);

  return (
    <>
      {!socket && <div>Connecting to Server...</div>}
      {socket && <div>{latestMessage}
      <button onClick={()=>{socket?.send("Hello Message")}}>Send Hi</button></div>}
    </>
  )
}

export default App;
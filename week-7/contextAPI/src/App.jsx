import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  return (
    <>
      <h1>Hello Welcome</h1>

      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider >
    </>
  );
}

export default App;
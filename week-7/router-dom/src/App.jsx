import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar/>
        <hr/>
        <Routes>

          <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard />
              </Suspense>}>
          </Route>


          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Landing />
              </Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();

  function handleDashboardClick() {
    navigate("/dashboard");
  }

  function handleLandingClick() {
    navigate("/");
  }
  return (
    <>
      <div style={{backgroundColor: 'green', height: '10vh'}}>
        <h1>Hello</h1>
      </div>

      <div>
        <button onClick={ handleDashboardClick }>Dashboard</button>
        <button onClick={ handleLandingClick }>Landing</button>
      </div>
    </>
  );
}

export default App;
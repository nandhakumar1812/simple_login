// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login.jsx";
import Logged from "./Pages/logged.jsx";
import './index.css';

function App() {

  return (
    <>
      <div>

        <Router>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/logged" element={<Logged/>} />
            </Routes>
        </Router>
      </div>
    </>
  );

}

export default App

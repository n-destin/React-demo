
import './App.css';
import Header from "./header.jsx"
import Background from "./assets/Destin 3DS.png"
import React from "react"
import {Routes, Route } from 'react-router-dom';

// import Contact from "./contact"
function App() {
   return(
    <div className = "App" style={{
      backgroungImage : "url(" + { Background } + ")"
    }}>
        <Routes>
            <Route path="/" element={<Header/>}/>
        </Routes>

    </div>
   )
}

export default App;
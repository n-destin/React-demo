
import './App.css';
import Header from "./header.jsx"
import React from "react"
import {Routes, Route } from 'react-router-dom';

// import Contact from "./contact"
function App() {
   return(
    <div className = "App">
        <Routes>
            <Route path="/" element={<Header/>}/>
        </Routes>

    </div>
   )
}

export default App;
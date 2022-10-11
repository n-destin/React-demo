
import './App.css';
import Navigation from "./navigation"
import Header from "./header.jsx"
import Footer from  "./footer"
import React from "react"
import {Router, Routes, Route } from 'react-router-dom';

// import Contact from "./contact"
function App() {
   return(
    <div className = "App">
      
      <Router>
        <Routes>
            <Route exact path="/" component={Header}/>
            <Route exact path="/about" component={Navigation}/>
            <Route exact path='/footer' component={Footer}/>
        </Routes>
    </Router>,

      {/* <Navigation />
      <Header/>
      <Footer/> */}
    </div>
   )
}

export default App;

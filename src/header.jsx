import React from "react";
import "./styling/heading.css";
import Me from "./assets/Trans2.png"
import Navigation from "./navigation";
import Footer from "./footer"
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import Contact from './contact'
import Background from "./assets/Destin 3DS.png"
// import Contact from './contact'
function Header (){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
   return(
       <div>
        <Navigation/> 
        <header className="heading" style={{
      backgroungImage : "url(" + { Background } + ")"
    }}>
          <div className="descripiton">
            <h1>Hello, It's me.</h1>
            <h1 className="name">Destin<span>.</span></h1>
            <p>I design and build quality responsive websites, clean user interaces,
                 and rich interactive web apps. I am seeking React, Javascript, and 
                 other web development opportunities. Open to Tech Opportunities 
                 that can advance my Skills in my areas on interest(Web development, 
                 Big Data, and Machine Learning)</p>
                 <a href = "#Contact"><button className= "btn-ping" onClick={handleShow}>Ping me</button></a>
                

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><Contact/></Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
          </div>
          <div>
            <img className="image" src= {Me} alt="destin" height="500px" width ="500px" />
            <hr />
            <div className="copyright"><p>&copy; 2022 Destin Niyomufasha All-rights reserved</p></div>
          </div> 
        </header>
        <Footer/>

       </div>
   )
}

export default Header;
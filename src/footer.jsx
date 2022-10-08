import React from "react"
import Twitter from "./assets/twitter-blue.png"
import Insta from "./assets/inta.png"
import Facebook from "./assets/facebook-one.png"
import "./styling/footer.css"

const Contact = () =>{
   return(
    <div className="Contact-section">
      <div id="intro"><p>React Me through my Socials</p></div>
       <ul className="socials">
          <a href=""><img src={Twitter} alt="twitter-social"/></a>
          <a href=""><img src={Insta} alt="twitter-social"/></a>
          <a href=""><img src={Facebook} alt="twitter-social"/></a>
       </ul>
    </div>
   )
}

export default Contact;

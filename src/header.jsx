import React from "react";
import "./styling/heading.css";
import Me from "./assets/Destin 3DS.png"

function Header (){
    // const [display, setdisplay] = useState(false)
    // let target =  document.getElementsByClassName("btn-ping")
    // const handleChange =() =>{
    //     target.addEventListener("click", ()=>{
    //         if()
    //     })
    // }

   return(
       <div>
        <header className="heading">
          <div className="descripiton">
            <h1>Hello, It's me.</h1>
            <h1 className="name">Destin<span>.</span></h1>
            <p>I design and build quality responsive websites, clean user interaces,
                 and rich interactive web apps. I am seeking React, Javascript, and 
                 other web development opportunities. Open to Tech Opportunities 
                 that can advance my Skills in my areas on interest(Web development, 
                 Big Data, and Machine Learning)</p>
                 <a href = "#Contact"><button className= "btn-ping">Ping me</button></a>
                 {/* <p className = {setdisplay == true ? "popup" : "view"}>Destin</p> */}
          </div>
          <div>
            <img className="image" src= {Me} alt="destin" height="500px" width ="500px" />
            <hr />
            <div className="copyright"><p>&copy; 2022 Destin Niyomufasha All-rights reserved</p></div>
          </div> 
        </header>
       </div>
   )
}

export default Header;
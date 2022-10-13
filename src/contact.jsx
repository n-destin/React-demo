import React from "react";
import emailjs, { init } from "emailjs-com";
import "./styling/contact.css"
import Pic from "./assets/About-pic.jpeg"
import Footer from "./footer"
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vfgy2ev",
        "template_02g4929",
        e.target,
        "user_9jLdO8H26hYMcdiuTRjOZ"
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you for your time. I will reply as soon as possible!");
        }
      })
      // Handle errors here however you like
      .catch((err) =>
        console.error(
          "Failed to send feedback. Error: ",
          err,
          process.env.REACT_APP_EMAILJS_USERID
        )
      );
  }

  return (
    <div id="contact" style={{
      backgroungImage : "url(" + {Pic} + ")"
    }}>
      <div className="gridlayout1 start">
        <div>
          <h2>Contact</h2>
          <p>
            Drop a message, let’s connect, will reach out as soon as possible.
          </p>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="grid2">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Please enter your full name"
                autoComplete="off"
              />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Please enter your email address"
                autoComplete="off"
              />
              <div>
              <button type="submit" value="Send" id="submit-btn">
              &lt; Send /&gt;
              </button>
              </div>
            </div>
            <div className="grid-1">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="user_message"
              placeholder="Please enter your message"
              autoComplete="off"
            />
            </div>
          </form>
        </div>
        <div className="connect">
          <h2>CONNECT</h2>
          <p>Please feel free to also reach out on other platforms.</p>
          <div className="grid3">
            <div className="item">
            <a href="https://www.linkedin.com/in/maverickcer/">
              <h3>LINKEDIN</h3>
              <p>Connect with me</p>
            </a>
            </div>
            <div className="item">
            <a href="https://twitter.com/MaverickCER">
              <h3>TWITTER</h3>
              <p>Check out project announcements</p>
            </a>
            </div>
            <div className="item">
            <a href="https://www.reddit.com/user/maverickcer">
              <h3>REDDIT</h3>
              <p>Join my subreddits</p>
            </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;

import React from "react";
const Contact = () => {
  return (
    <div id="contact">
      <div className="gridlayout1 start">
        <div>
          <h2>Contact</h2>
          <p>
            Drop a message, let’s connect, will reach out as soon as possible.
          </p>
          <form className="contact-form">
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
            </div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="user_message"
              placeholder="Please enter your message"
              autoComplete="off"
            />
            <button type="submit" value="Send">
              &lt; Send /&gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

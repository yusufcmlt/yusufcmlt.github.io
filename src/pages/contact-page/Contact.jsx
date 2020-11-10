import React from "react";
import "./Contact.style.scss";
const Contact = () => {
  return (
    <div className="contact-page-container">
      <h2>Let's Get in Touch!</h2>
      <div className="contact-form-container">
        <div className="contact-form-sidebar">
          <h3>Contact</h3>
          <p>
            You can reach me using the links below or simply filling the contact
            form!
          </p>
          <div className="contact-links-container">
            <a
              href="https://github.com/pdouu"
              className="contact-link github"
              target="_blank"
              rel="noreferrer"
            >
              {""}
            </a>
            <a
              href="https://www.linkedin.com/in/yusufcemalt/"
              className="contact-link linkedin"
              target="_blank"
              rel="noreferrer"
            >
              {""}
            </a>
          </div>
        </div>
        <div className="contact-form-content">
          <form
            className="contact-form"
            onClick={(event) => event.preventDefault()}
          >
            <input
              type="text"
              placeholder="name"
              className="email-name"
              required
            />
            <input
              type="email"
              placeholder="email"
              className="email-name"
              required
            />
            <input
              type="text"
              placeholder="Your Message"
              className="text"
              required
            />
            <button type="submit" className="contact-submit-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

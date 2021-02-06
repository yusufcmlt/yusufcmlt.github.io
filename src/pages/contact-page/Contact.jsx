import React, { useState } from "react";
import { createNewContactMessage } from "../../firebase/firebase-utils";

import "./Contact.style.scss";

const Contact = () => {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    messageSent: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setUserMessage({
      ...userMessage,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await createNewContactMessage(userMessage);
      setUserMessage({
        name: "",
        email: "",
        messageSent: "",
      });
      alert("Message Sent!");
    } catch (error) {
      alert("There is an error sending your message.");
      console.log(error);
    }
  };

  const { name, email, messageSent } = userMessage;
  return (
    <div id="contact" className="contact-page-container">
      <h2 className="section-h2">Let's Get in Touch!</h2>
      <p className="section-h2-subtitle">
        You can reach me using the links below or simply filling the contact
        form!
      </p>
      <div className="contact-form-container">
        <div className="contact-form-sidebar">
          <h3>Contact</h3>

          <div className="contact-links-container">
            <a
              href="https://github.com/yusufcmlt"
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
            <a
              href="https://www.hackerrank.com/yusufcmlt"
              className="contact-link hackerrank"
              target="_blank"
              rel="noreferrer"
            >
              {""}
            </a>
            <a
              href="mailto:6ziyv3vuq@relay.firefox.com"
              className="contact-link gmail"
              target="_blank"
              rel="noreferrer"
            >
              {""}
            </a>
          </div>
        </div>
        <div className="contact-form-content">
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="email-name"
              name="name"
              value={name}
              onChange={handleFormChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="email-name"
              name="email"
              value={email}
              onChange={handleFormChange}
              required
            />
            <textarea
              placeholder="Your Message"
              className="text"
              maxLength="500"
              name="messageSent"
              value={messageSent}
              onChange={handleFormChange}
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

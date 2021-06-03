import React, { useState } from "react";
import swal from "sweetalert";
import { createNewContactMessage } from "../../firebase/firebase-utils";
import { SkillItem } from "../about-page/skill-item/SkillItem";

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
    if (handleCheckForm()) {
      try {
        await createNewContactMessage(userMessage);
        setUserMessage({
          name: "",
          email: "",
          messageSent: "",
        });
        swal({ title: "Message Sent", icon: "success" });
      } catch (error) {
        swal({ title: "Failed to Send Message", icon: "error" });
        console.log(error);
      }
    } else {
      swal({
        title: "Error",
        text: "Please fill the form correctly :)",
        icon: "error",
      });
    }
  };

  const handleCheckForm = () => {
    for (const input in userMessage) {
      if (!userMessage[input].trim()) {
        return false;
      }
    }
    return true;
  };

  const { name, email, messageSent } = userMessage;
  return (
    <section id="contact" className="contact-page-container">
      <div className="title-container">
        <h1>
          Get in Touch!
          <span>
            You can reach me using the links below or simply filling the contact
            form!
          </span>
        </h1>
      </div>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <h2>Contact</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleFormChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleFormChange}
            required
          />
          <textarea
            placeholder="Your Message"
            maxLength="500"
            name="messageSent"
            value={messageSent}
            onChange={handleFormChange}
            required
          />
          <button type="submit">Send</button>
        </form>
        <div className="contact-links-container">
          <SkillItem name="Mail">
            <a
              href="mailto:6ziyv3vuq@relay.firefox.com"
              target="_blank"
              rel="noreferrer"
            >
              {}
            </a>
          </SkillItem>
          <SkillItem name="Linkedin">
            <a
              href="https://www.linkedin.com/in/yusufcemalt/"
              target="_blank"
              rel="noreferrer"
            >
              {}
            </a>
          </SkillItem>
          <SkillItem name="Github">
            <a
              href="https://github.com/yusufcmlt"
              target="_blank"
              rel="noreferrer"
            >
              {}
            </a>
          </SkillItem>
        </div>
      </div>
    </section>
  );
};

export default Contact;

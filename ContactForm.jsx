import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; 

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_zko3wpi";
    const TEMPLATE_ID = "template_5hk9uyo";
    const PUBLIC_KEY = "5SRegM5y_61nXOd3-";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus("✅ Your message has been sent!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Send me a message</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactForm;

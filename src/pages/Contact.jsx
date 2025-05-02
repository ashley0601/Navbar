// src/pages/Contact.js
import './PageStyles.css';

export default function Contact() {
  return (
    <div className="page contact">
      <form className="contact-form">
      <h1>Contact Me</h1>
        <label>Name</label>
        <input type="text" placeholder="Your name" />
        
        <label>Email</label>
        <input type="email" placeholder="you@example.com" />
        
        <label>Message</label>
        <textarea placeholder="Your message"></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

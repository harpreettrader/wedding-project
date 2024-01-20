import React from "react";
import "../styles/Contact.css"; 
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h3>Get in touch with us</h3>
        <p>
          Thank you for your interest in Sehnaigroup. We are always here to
          answer any questions you may have about our wedding planning and event
          management services. Whether you’re looking for a wedding planner,
          vendor management and services, or destination wedding planning, our
          team of experts is dedicated to making your special day memorable and
          stress-free. Please don’t hesitate to contact us by phone or email, or
          simply fill out the contact form below, and we’ll be happy to assist
          you.
          <br />
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.linkedin.com">LinkedIn</a>
        </p>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

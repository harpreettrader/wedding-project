// components/Footer.js
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <main className="main-footer">
      <section>
        <p className="copyright">&copy; 2024 Wedding Planner</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </section>
    </main>
  );
}

export default Footer;

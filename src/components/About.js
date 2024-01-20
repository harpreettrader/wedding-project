import React from "react";
import "../styles/About.css";
import about1 from "../images/about1.webp";
import about2 from "../images/about2.webp";
import about3 from "../images/about3.webp";
import about4 from "../images/about4.webp";

function About() {
  return (
    <div className="about-container">
      <h2>Our Vision</h2>

      {/* First .about-items */}
      <div className="about-items">
        <img src={about1} alt="about1 images" />
        <p>
          Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
          Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
          Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
        </p>
      </div>

      {/* Second .about-items */}
      <div className="about-items">
        <p>
        Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
          Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
          Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
        </p>
        <img src={about2} alt="about2 images" />
      </div>

      {/* Third .about-items */}
      <div className="about-items">
        <img src={about3} alt="about3 images" />
        <p>
        Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
          Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
          Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
        </p>
      </div>

      {/* Fourth .about-items */}
      <div className="about-items">
        <p>
        Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
          Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
          Welcome to Wedding Planner, your dedicated team of experienced wedding
          planners. At Wedding Planner, we understand the significance of your
          special day and are committed to making it memorable for you.
        </p>
        <img src={about4} alt="about4 images" />
      </div>
    </div>
  );
}

export default About;

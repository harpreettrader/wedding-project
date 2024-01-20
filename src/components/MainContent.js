import React from "react";
import HomePhoto from "../images/wedding1.jpg";
import "../styles/MainContent.css";

function MainContent() {
  return (
    <>
      <main>
        <section>
          <h2>Welcome to Wedding Planner</h2>
          <p> your one-stop-shop for all your event planning needs. We specialize in delivering bespoke events that are tailored to your distinct vision and needs. From vendor management to destination weddings, our team of experts is dedicated to delivering unforgettable experiences that will leave a lasting impression on your guests.</p>
          <img className="HomeIMG" src={HomePhoto} />
        </section>
      </main>
    </>
  );
}

export default MainContent;

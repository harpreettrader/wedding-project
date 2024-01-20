import React from "react";
import "../styles/Services.css";
import services1 from "../images/services1.webp"
import services2 from "../images/services2.webp"
import services3 from "../images/services3.webp"
import services4 from "../images/services4.webp"

function Services() {
  return (
    <>
      <div className="services-container">
        <h2>Services we provide</h2>
        <div className="services-grid">
          <div className="service-box">
            <h3>Wedding Planner</h3>
            <p>
              Our professional wedding planners work with you to create a
              memorable and personalized wedding experience that reflects your
              unique style and vision.
            </p>
          </div>
          <div className="service-box">
            <h3>Vendor Management and Services</h3>
            <p>
              Our vendor management and services ensure that every vendor
              involved in your event is carefully selected, vetted, and managed
              to deliver the highest quality service.
            </p>
          </div>
          <div className="service-box">
            <h3>Destination Wedding</h3>
            <p>
              Our destination wedding planning service takes you to the most
              exotic locations around the world, offering a unique experience
              and an unforgettable wedding.
            </p>
          </div>
          <div className="service-box">
            <h3>Corporate Event Planning</h3>
            <p>
              Our corporate event planning services are designed to create a
              professional and engaging experience that reflects your company’s
              brand and values.
            </p>
          </div>
        </div>
      </div>
      <div className="detail-container" >
        <div className="service-details">
          <img src={services1} alt="services1"  />
          <div className="sub-services">
          <h3>Wedding Planner</h3>
          <p>At Sehnaigroup, we understand that weddings are a once-in-a-lifetime event, and our team of expert wedding planners is dedicated to making your special day extraordinary. With years of experience in the wedding planning industry, we specialize in creating custom wedding experiences that reflect your unique style and vision. From intimate ceremonies to grand celebrations, we work with you every step of the way to ensure that your dream wedding becomes a reality. Our wedding planners are well-equipped to handle every detail of your wedding, from vendor management to venue selection, catering, decor, and more. We understand that every couple is unique, and that’s why we take a personalized approach to every wedding we plan. Our wedding planners listen attentively to your needs and preferences, and work with you to create a wedding experience that is tailored to your specific needs. At Sehnaigroup, we believe that the key to planning a successful wedding is communication and transparency. We keep you informed and involved every step of the way, ensuring that you have a clear understanding of the planning process and the progress being made. Our team of wedding planners is available to answer your questions and address your concerns promptly, ensuring that you have a stress-free and enjoyable wedding planning experience. Whether you’re planning a traditional wedding or a modern celebration, our wedding planners have the expertise and resources to make your wedding day unforgettable. Let us take care of the details so that you can focus on enjoying your special day with your loved ones</p>
          </div>
        </div>
        <div className="service-details">
          <img src={services2} alt="services2"  />
          <div className="sub-services">
          <h3>Vendor Management and Services</h3>
          <p>At Sehnaigroup, we understand that weddings are a once-in-a-lifetime event, and our team of expert wedding planners is dedicated to making your special day extraordinary. With years of experience in the wedding planning industry, we specialize in creating custom wedding experiences that reflect your unique style and vision. From intimate ceremonies to grand celebrations, we work with you every step of the way to ensure that your dream wedding becomes a reality. Our wedding planners are well-equipped to handle every detail of your wedding, from vendor management to venue selection, catering, decor, and more. We understand that every couple is unique, and that’s why we take a personalized approach to every wedding we plan. Our wedding planners listen attentively to your needs and preferences, and work with you to create a wedding experience that is tailored to your specific needs. At Sehnaigroup, we believe that the key to planning a successful wedding is communication and transparency. We keep you informed and involved every step of the way, ensuring that you have a clear understanding of the planning process and the progress being made. Our team of wedding planners is available to answer your questions and address your concerns promptly, ensuring that you have a stress-free and enjoyable wedding planning experience. Whether you’re planning a traditional wedding or a modern celebration, our wedding planners have the expertise and resources to make your wedding day unforgettable. Let us take care of the details so that you can focus on enjoying your special day with your loved ones</p>
          </div>
        </div>
        <div className="service-details">
          <img src={services3} alt="services3"  />
          <div className="sub-services">
          <h3>Destination Wedding</h3>
          <p>At Sehnaigroup, we understand that weddings are a once-in-a-lifetime event, and our team of expert wedding planners is dedicated to making your special day extraordinary. With years of experience in the wedding planning industry, we specialize in creating custom wedding experiences that reflect your unique style and vision. From intimate ceremonies to grand celebrations, we work with you every step of the way to ensure that your dream wedding becomes a reality. Our wedding planners are well-equipped to handle every detail of your wedding, from vendor management to venue selection, catering, decor, and more. We understand that every couple is unique, and that’s why we take a personalized approach to every wedding we plan. Our wedding planners listen attentively to your needs and preferences, and work with you to create a wedding experience that is tailored to your specific needs. At Sehnaigroup, we believe that the key to planning a successful wedding is communication and transparency. We keep you informed and involved every step of the way, ensuring that you have a clear understanding of the planning process and the progress being made. Our team of wedding planners is available to answer your questions and address your concerns promptly, ensuring that you have a stress-free and enjoyable wedding planning experience. Whether you’re planning a traditional wedding or a modern celebration, our wedding planners have the expertise and resources to make your wedding day unforgettable. Let us take care of the details so that you can focus on enjoying your special day with your loved ones</p>
          </div>
        </div>
        <div className="service-details">
          <img src={services4} alt="services4"  />
          <div className="sub-services">
          <h3>Corporate Event Planning</h3>
          <p>At Sehnaigroup, we understand that weddings are a once-in-a-lifetime event, and our team of expert wedding planners is dedicated to making your special day extraordinary. With years of experience in the wedding planning industry, we specialize in creating custom wedding experiences that reflect your unique style and vision. From intimate ceremonies to grand celebrations, we work with you every step of the way to ensure that your dream wedding becomes a reality. Our wedding planners are well-equipped to handle every detail of your wedding, from vendor management to venue selection, catering, decor, and more. We understand that every couple is unique, and that’s why we take a personalized approach to every wedding we plan. Our wedding planners listen attentively to your needs and preferences, and work with you to create a wedding experience that is tailored to your specific needs. At Sehnaigroup, we believe that the key to planning a successful wedding is communication and transparency. We keep you informed and involved every step of the way, ensuring that you have a clear understanding of the planning process and the progress being made. Our team of wedding planners is available to answer your questions and address your concerns promptly, ensuring that you have a stress-free and enjoyable wedding planning experience. Whether you’re planning a traditional wedding or a modern celebration, our wedding planners have the expertise and resources to make your wedding day unforgettable. Let us take care of the details so that you can focus on enjoying your special day with your loved ones</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

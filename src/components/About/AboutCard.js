import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Neeraj Kumawat</span> from Jaipur, Rajasthan, India. I am a computer science post graduate from <span className="primary-header">National Insitute of Technology ,Karnataka</span> and a passionate programmer.
            <br />
            <br />
           I love coding and these are some things which i also like
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing badminton
            </li>
            
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Online games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Love to eat different food items
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Yoga and Meditation
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

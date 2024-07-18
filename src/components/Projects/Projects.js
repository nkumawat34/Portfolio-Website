import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Blockchain from "../../Assets/Projects/Blockchain.PNG"
import Ecart from "../../Assets/Projects/ecart.png";
import MovieSearchEninge from "../../Assets/Projects/Movie_Search_Engine.png"
import CryptoCurrency from "../../Assets/Projects/CryptoCurrency.png"
import Video  from "../../Assets/Portfolio.png"
import Youtube from "../../Assets/youtube.jpg"
import Mentalhealth from "../../Assets/mental_health.jpg"
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Apna Samaan"
              description="This is a fully functional eCommerce website that uses React.js + Bootsrap and CSS in the front end and Firebase in backend for authentication and database."
              ghLink="https://github.com/nkumawat34/ApnaSamaan"
              demoLink="https://nkumawat34.github.io/ApnaSamaan/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={CryptoCurrency}
              title="React Crypto Tracker"
              description="This project is all about cryptocurrencies and their live data.Chart is also there for each cryptocurrency.
"
              ghLink="https://github.com/nkumawat34/Crypto_Hunter"
              demoLink="https://crypto-hunter-p61o.onrender.com/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Chatting Application"
              description="This is simple application where multiple people can chat together and room option is also there. 
UI part is built using ReactJs and Node.js used for backend.Socket.io is highly used library"
              ghLink="https://github.com/nkumawat34/Chat_App"
              demoLink="https://chat-app-frontend-1lqo.onrender.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={MovieSearchEninge}
              title="MovieSearchEngine"
              description="It is Movie search engine where you can search the movies by name. It is built with omdb api, HTML, CSS, Javascript, BootStrap and ReactJS "
              ghLink="https://github.com/nkumawat34/MovieSearchEngine"
              demoLink="https://nkumawat34.github.io/MovieSearchEngine/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Blockchain}
              title="
Decentralized Storage Of Educational Assets and verification using blockchain technology"
              description="It is platform for student and university where documents are uploaded in IPFS and verified through blockchain"
              ghLink="https://github.com/nkumawat34/Etherium_Document_Storage"
              demoLink="https://client-etherium-storage-project.onrender.com/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Video}
              title="
Video Conferencing Application"
              description="It is a project which uses webrtc protocol for video conferencing.It is used for one to one conferencing"
              ghLink="https://github.com/nkumawat34/Client_Video_App"
              demoLink="https://client-video-app.onrender.com/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              title="Youtube Mp3 Downloader"
              description="It is a project which is useful for download MP3 songs from youtube url "
              ghLink="https://github.com/nkumawat34/Youtube_MP3_Download"
              demoLink="https://youtube-mp3-download-frontend.onrender.com"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Mentalhealth}
              title="Mental Health Stories"
              description="Mental Health Stories offer a poignant exploration of the human experience through the lens of mental wellness. These narratives courageously delve into personal struggles with conditions like depression, anxiety, and PTSD, capturing the raw emotions and challenges individuals face. By sharing these stories, authors not only offer solace and validation to those experiencing similar battles but also aim to dismantle stigma and raise awareness.  "
              ghLink="https://github.com/nkumawat34/Mental_Health_Stories"
              demoLink="https://mental-health-frontend.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;

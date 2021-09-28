import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "I am a front-end-leaning full-stack developer and psychology enthusiast currently based in Scottsdale, AZ. I’ve been dabbling in web design and front-end work since I was 13, pouring hours of my time into pimping out me and my friends' Myspaces. I am passionate about building design-oriented applications and experimenting to execute projects.  After pursuing my degree in Psychology, I reconnected with my love for innovative engineering. I hope to find opportunities where I can bridge both of my passions in any form."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "I'm a go-getter and always hungry to learn. I am currently focused on Javascript and React. Skills include Python, JavaScript, HTML5, CSS3, Flask, React.js, Node.js, jQuery, Material-UI, PostgreSQL, Bootstrap, JSON, Firebase, Gatsby, Heroku, Git, and Adobe Photoshop."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || "In my free time, you can find me outdoors hiking, climbing, or playing tennis. Inside, I'm reading up on the latest health articles or playing video games. I'm currently learning to slackline!"}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

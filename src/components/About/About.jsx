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
                    'I am a front-end-leaning full-stack developer and self-development enthusiast based in Scottsdale, AZ.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "I’ve been dabbling in web design and front-end work since I was 13. I poured hours of my time into pimping out me and my friends' Myspaces and designing with Adobe Photoshop. I was passionate about experimenting to execute the vision I had for each page design. During my time in university, I pursued my other passion for psychology, namely behavior change and the ability one has to change their lives through their health and habits. After over 7 years in the industry, I reconnected with my love for innovative engineering by taking a leap and devoting my time to building upon my programming skills. I am currently focused on Javascript and React. I'm a go-getter and always hungry to learn."}
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

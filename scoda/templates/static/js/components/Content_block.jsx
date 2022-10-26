import React from 'react';
import Button from './Button';
import Paragraph from './Paragraph';
import Image from './Image';
import Title_block from './Title_block';
import { Container, Row, Col } from 'reactstrap';

const Content_block = (props) => {
  return (
      <Container className="content-block">
        <Row>
          <Col className="content-block--text" md="6">
          <Title_block title="UKZN" />
          <p>How do you show prospective university students a university in the context of its city? This was the challenge we sought to solve for the University of KwaZulu-Natal. <br/><br/>The concept was to create a geographical portal to engage with and orientate prospective international students. The concept centers around an interactive map of Durban, illustrated to showcase local culture by a local artist, Brad Cuzen. The map exhibits the location of various cultural attractions, landmarks, social hotspots and public transport, all in relation to the five major university campuses in the city and surrounding areas.<br/><br/> Upon exploration of these campuses, users are led into an immersive 360 virtual tour of the campuses with direct access to contact for further enquiries or applications. Secondary interest points further engage the user through various points of contact, imagery and even sound clips bringing Durban’s energetic vibe alive! Turn up the volume and explore! Involvement | Complete Project Front End Tech Stack | Python, Flask, Gulp.js, Bootstrap 4, JQuery UI </p>
          </Col>
          <Col className="d-flex justify-content-center align-items-center content-block--image" md="6">
          <Image alt="students" className="" imgSrc={props.imgSrc}/>
          </Col>
        </Row>
          <Button id="#ukzn-site" href="https://irmaps.ukzn.ac.za" target="blank" text="Visit The Site" className="btn btn_highlight light content-block--button" icon={[<i key className="fas fa-arrow-right"></i>]} />
      </Container>
  );
};

export default Content_block;
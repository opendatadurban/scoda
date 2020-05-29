 import React, { Component } from 'react';
 import ReactDom from 'react-dom';
 import { Container, Row, Col } from 'reactstrap';
 import Card_single from './Card_single';
 import Card_drawer from './Card_drawer';

class Card_chest extends Component {
  render() {
    return (
      
      <Container fluid className={["card-chest "] + this.props.className} id="cardChest">
        <Container id="cardChestContent">
          <Row>
            <Col xs="12" sm="4" className="p-0 card-wrapper">
              <Card_single cardTitle="UKZN" 
                cardText="How do you show prospective university students a university in the context of its city? This was the challenge we sought to solve for the University of KwaZulu-Natal." 
                buttonId="ukzn" 
                buttonOnClick={this.props.mountCardDrawerData} 
                buttonClasses="btn btn_secondary" 
                buttonIcon={[<i key className="fas fa-arrow-right"></i>]} 
                buttonText="view project">
              </Card_single>
            </Col>
            <Col xs="12" sm="4" className="p-0 card-wrapper">
              <Card_single cardTitle="UKZN" 
                cardText="How do you show prospective university students a university in the context of its city? This was the challenge we sought to solve for the University of KwaZulu-Natal." 
                buttonId="ukzn" 
                buttonOnClick={this.props.mountCardDrawerData} 
                buttonClasses="btn btn_secondary" 
                buttonIcon={[<i key className="fas fa-arrow-right"></i>]} 
                buttonText="view project">
              </Card_single>
            </Col>
            <Col xs="12" sm="4" className="p-0 card-wrapper">
              <Card_single cardTitle="UKZN" 
                cardText="How do you show prospective university students a university in the context of its city? This was the challenge we sought to solve for the University of KwaZulu-Natal." 
                buttonId="ukzn" 
                buttonOnClick={this.props.mountCardDrawerData} 
                buttonClasses="btn btn_secondary" 
                buttonIcon={[<i key className="fas fa-arrow-right"></i>]} 
                buttonText="view project">
              </Card_single>
            </Col>
     
          </Row>
          <Row>
          <Col xs="12" sm="4" className="p-0 card-wrapper">
              <Card_single cardTitle="UKZN" 
                cardText="How do you show prospective university students a university in the context of its city? This was the challenge we sought to solve for the University of KwaZulu-Natal." 
                buttonId="ukzn" 
                buttonOnClick={this.props.mountCardDrawerData} 
                buttonClasses="btn btn_secondary" 
                buttonIcon={[<i key className="fas fa-arrow-right"></i>]} 
                buttonText="view project">
              </Card_single>
            </Col>
          <Col xs="12" sm="4" className="p-0 card-wrapper">
              <Card_single cardTitle="UKZN" 
                cardText="How do you show prospective university students a university in the context of its city? This was the challenge we sought to solve for the University of KwaZulu-Natal." 
                buttonId="ukzn" 
                buttonOnClick={this.props.mountCardDrawerData} 
                buttonClasses="btn btn_secondary" 
                buttonIcon={[<i key className="fas fa-arrow-right"></i>]} 
                buttonText="view project">
              </Card_single>
            </Col>
          <Col xs="12" sm="4" className="p-0 card-wrapper">
              <Card_single cardTitle="UKZN" 
                cardText="How do you show prospective university students a university in the context of its city? This was the challenge we sought to solve for the University of KwaZulu-Natal." 
                buttonId="ukzn" 
                buttonOnClick={this.props.mountCardDrawerData} 
                buttonClasses="btn btn_secondary" 
                buttonIcon={[<i key className="fas fa-arrow-right"></i>]} 
                buttonText="view project">
              </Card_single>
            </Col>
          </Row>
        </Container>
      </Container>
     )
   }
 }

 export default class Wrapper extends Component {
   mount(){
     ReactDom.render(<Card_drawer />, document.querySelector('#cardChestContent'))
    }
    unmount(){
      // Couldn't get this to work. Need to do through state and parent 
   }
   render(){
     return(
       <Card_chest mountCardDrawerData={this.mount.bind(this)} className="animated fadeIn"/>
     )
   }
 }
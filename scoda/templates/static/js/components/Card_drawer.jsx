import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Content_block from './Content_block';
import Button from './Button';
import Card_chest from './Card_chest';
import { Container } from 'reactstrap';

class Card_drawer extends Component {
  render() {
    return (
    <Container className={["card-drawer animated fadeIn "] + this.props.className}>
      <Button className="btn btn_link card-drawer--button" text="back to collection" icon={[<i key className="fas fa-arrow-up btn--icon_top"></i>]} onClick={this.props.mountCardChestData}/>
      <Content_block imgSrc="../../../../static/dist/img/blackbox/project_ukzn.webp" />
    </Container>
  );
};
}


export default class Wrapper extends Component {
  mount(){
    ReactDom.render(<Card_chest />, document.querySelector('#cardChestContent'))
   }
   unmount(){
     // Couldn't get this to work. Need to do through state and parent 
  }
  render(){
    return(
      <Card_drawer mountCardChestData={this.mount.bind(this)} className="animated fadeIn"/>
    )
  }
}

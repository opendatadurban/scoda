import React, { useState } from 'react';
import {Container,Collapse,NavbarBrand,Nav,NavItem,NavLink,Media} from 'reactstrap';


const Default = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  console.log(props);

// LOGO CHECK SWITCH
let logoPath = '';
  if(props.className.includes('nav_mobile_expanded')){
    logoPath = props.logoPath // Large logo for expanded
  } else {
    logoPath = props.logoIconPath // Small logo icon for default
  }

  return (
    <div className={["navigation " + props.className]}> {/* Use bg_ and color classes in helpers.scss eg 'bg_transparent' */}
    <Container>
    <nav className="navbar navbar-expand-lg header-navigation"> {/* Used default bootstrap markup to avoid using reactstrap default classes */}
        <NavbarBrand href='/' id="black-box-logo"> 
        <Media object src={logoPath} alt="Generic placeholder image" />
      </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
          {props.menu.items.map((item, i) => 
            <NavItem>
              <NavLink key={i} href={item[1]}>{item[0]}</NavLink>
            </NavItem>
             )}
          </Nav>
          <div className="social text-left d-sm-none">
              {props.social.items.map((item, i) =>
                <a key={i} href={item[0]} className="social-link"><i className={item[1]}></i></a>
              )}
          </div>
        </Collapse>
        <button aria-label="Toggle navigation" id="hamburger" type="button" className="navbar-toggler" onClick={toggle}>
        <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
          <span className="navbar-toggler-line"></span>
        </button>
      </nav>
      </Container>
      </div>
  );
}

export default Default;
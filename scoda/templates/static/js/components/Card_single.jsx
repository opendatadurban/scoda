import React from 'react';
import Button from './../components/Button';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const Card_single = (props) => {
  return (
      <Card>
        <CardBody>
          <CardTitle>{props.cardTitle}</CardTitle>
          <CardText>{props.cardText}</CardText>
          <Button className={props.buttonClasses} text={props.buttonText} icon={props.buttonIcon} id={props.buttonId} onClick={props.buttonOnClick}/>
        </CardBody>
      </Card>
  );
};

export default Card_single;
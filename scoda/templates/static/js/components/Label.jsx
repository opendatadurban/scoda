import React from 'react';

const Label = (props) => {
  return (
  <label id={props.id} htmlFor={props.for} className={["label "] + props.className} onClick={props.onClick}>{props.text}{props.children}</label>
  );
};

export default Label;
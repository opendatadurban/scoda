import React from 'react';

const Component = (props) => {
  return (
    <h2 className={["Component "] + props.className}>{props.title}</h2>
  );
};

export default Component;